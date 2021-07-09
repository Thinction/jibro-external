import { gql } from "@apollo/client";

export const CREATE_RESERVATION = gql`
  mutation createReservation(
    $serviceId: String!
    $hopeDate: String!
    $isPreview: Boolean
  ) {
    createReservation(
      serviceId: $serviceId
      hopeDate: $hopeDate
      isPreview: $isPreview
    ) {
      ok
      error
      reservation {
        id
      }
    }
  }
`;

export const GET_RESERVATIONS = gql`
  query getReservations {
    getReservations {
      id
      hopeDate
      reservationState
      cancelReason
      isTutorCancelled
      displayIdNumber

      to {
        id
        avatar
        name
      }
      from {
        id
        avatar
        name
      }
      service {
        id
        title
      }
    }
  }
`;

export const CANCEL_RESERVATION = gql`
  mutation cancelReservation($reservationId: String!, $cancelReason: String!) {
    cancelReservation(
      reservationId: $reservationId
      cancelReason: $cancelReason
    ) {
      ok
      error
    }
  }
`;

export const CONFIRM_RESERVATION = gql`
  mutation confirmReservation($reservationId: String!) {
    confirmReservation(reservationId: $reservationId) {
      ok
      error
    }
  }
`;

export const UPDATE_RESERVATION = gql`
  mutation updateReservation($reservationId: String!, $hopeDate: String!) {
    updateReservation(reservationId: $reservationId, hopeDate: $hopeDate) {
      ok
      error
    }
  }
`;

export const GET_RESERVATION = gql`
  query getReservation($reservationId: String!) {
    getReservation(reservationId: $reservationId) {
      ok
      error
      reservation {
        service {
          id
          title
          price
          previewPrice
          displayPrice
          displayPreviewPrice
          displayClassType
          numOfClass
          timePerClass
        }
        hopeDate
        isPreview
        reservationState

        to {
          id
          avatar
          name
        }
      }
    }
  }
`;
