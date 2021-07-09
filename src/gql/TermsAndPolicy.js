import { gql } from "@apollo/client";

export const GET_TERMS = gql`
  query getTerms {
    getTerms {
      ok
      terms {
        body
      }
      error
    }
  }
`;
export const GET_POLICY = gql`
  query getPolicy {
    getPolicy {
      ok
      policy {
        body
      }
      error
    }
  }
`;

export const GET_CANCEL_POLICY = gql`
  query getCancelPolicy {
    getCancelPolicy {
      ok
      cancelPolicy {
        body
      }
      error
    }
  }
`;
