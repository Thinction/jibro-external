import { gql } from "@apollo/client";

export const GET_USER_TYPE = gql`
  query getUserType {
    getUserType {
      ok
      user {
        userType
      }
      error
    }
  }
`;

export const CREATE_TUTOR_PROFILE = gql`
  mutation createTutorProfile(
    $introduce: String
    $categoryId: String
    $workingArea: String
    $licenses: [String!]
    $careers: [String!]
    $step: Int
    $done: Boolean
  ) {
    createTutorProfile(
      introduce: $introduce
      categoryId: $categoryId
      workingArea: $workingArea
      licenses: $licenses
      careers: $careers
      step: $step
      done: $done
    ) {
      ok
      error
    }
  }
`;
export const GET_MY_JIBRO_CASH = gql`
  query getMyJibroCash {
    getMyJibroCash {
      cash
      displayCash
    }
  }
`;

export const SEND_FCM_TOKEN = gql`
  mutation sendFCMToken($token: String!) {
    sendFCMToken(token: $token) {
      ok
    }
  }
`;
export const GET_USER = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      ok
      user {
        id
        userType
        tutorProfile {
          id
          introduce
          careers
          licenses
          category {
            title
          }
        }
        avatar
        name
        email
        password
        phoneNumber
        address
        workingArea
        idCardImage
        homeImage
        licenseImage
        point
        reservationAlarm
        reviewAlarm
        messageAlarm
        selfAuthentication
        idCardAuthentication
        homeAuthentication
        licenseAuthentication
        reviewCount
        services {
          id
          title
        }
        fromServiceReviews {
          id
          to {
            id
            name
            avatar
          }
          rate
          body
          createdAt
        }
        toReviews {
          id
          from {
            id
            name
            avatar
          }
          rate
          body
          createdAt
        }
        createdAt
        updatedAt
      }
      error
    }
  }
`;
