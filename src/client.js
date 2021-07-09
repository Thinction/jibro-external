import { ApolloClient, InMemoryCache, makeVar, split } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const TOKEN = "token";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};
export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
};

const uploadHttpLink = createUploadLink({
  uri: process.env.REACT_APP_BACKEND_URL,
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_BACKEND_WS,
  options: {
    connectionParams: () => ({
      token: localStorage.getItem(TOKEN),
    }),
  },
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
    },
  };
});

const httpLinks = authLink.concat(uploadHttpLink);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLinks
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
