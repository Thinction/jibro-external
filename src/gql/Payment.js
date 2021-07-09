import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation createPayment($reservationId: String!) {
    createPayment(reservationId: $reservationId) {
      ok
      error
    }
  }
`;

export const GET_PAYMENTS = gql`
  query getPayments {
    getPayments {
      id
      paymentState
      depositState
      displayIdNumber
      displayTax
      displayIncome
      displayPrice

      amIwortedReview
      reservation {
        hopeDate
      }
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
        displayClassType
        numOfClass
        timePerClass
      }
    }
  }
`;

export const REQUEST_REFUND = gql`
  mutation requestRefund($paymentId: String!) {
    requestRefund(paymentId: $paymentId) {
      ok
      error
    }
  }
`;
export const ACCEPT_REFUND = gql`
  mutation acceptRefund($paymentId: String!) {
    acceptRefund(paymentId: $paymentId) {
      ok
      error
    }
  }
`;
export const CANCEL_PAYMENT = gql`
  mutation cancelPayment($paymentId: String!) {
    cancelPayment(paymentId: $paymentId) {
      ok
      error
    }
  }
`;

export const DELETE_PAYMENT = gql`
  mutation deletePayment($paymentId: String!) {
    deletePayment(paymentId: $paymentId) {
      ok
      error
    }
  }
`;
export const CANCEL_REFUND = gql`
  mutation cancelRefund($paymentId: String!) {
    cancelRefund(paymentId: $paymentId) {
      ok
      error
    }
  }
`;
