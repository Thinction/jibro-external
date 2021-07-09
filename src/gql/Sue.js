import { gql } from "@apollo/client";

export const CREATE_SUE = gql`
  mutation createSue($toId: String!, $body: String) {
    createSue(toId: $toId, body: $body) {
      ok
      error
    }
  }
`;
