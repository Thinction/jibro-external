import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query getCategories {
    getCategories {
      ok
      error
      categories {
        id
        title
        serviceCount
        image
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query getCategory($categoryId: String!) {
    getCategory(categoryId: $categoryId) {
      ok
      error
      category {
        id
        rule
      }
    }
  }
`;
