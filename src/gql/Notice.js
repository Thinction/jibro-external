import { gql } from "@apollo/client";

export const GET_NOTICES = gql`
  query getNotices {
    getNotices {
      ok
      notices {
        id
        title
        body
        createdAt
      }
      error
    }
  }
`;
