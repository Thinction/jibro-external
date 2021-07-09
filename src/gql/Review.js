import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation createReview($paymentId: String!, $body: String, $rate: Int!) {
    createReview(paymentId: $paymentId, body: $body, rate: $rate) {
      ok
      error
    }
  }
`;

export const GET_TUTOR_SERVICES_REVIEWS = gql`
  query getTutorServicesReviews($id: String!) {
    getTutorServicesReviews(id: $id) {
      ok
      serviceReviews {
        id
        service {
          id
          title
        }
        to {
          id
          name
        }
        from {
          id
          name
          avatar
        }
        rate
        body
        createdAt
      }
      error
    }
  }
`;
