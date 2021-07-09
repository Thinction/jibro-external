import { gql } from "@apollo/client";

export const DELETE_ALL_NOTIFICATIONS = gql`
  mutation deleteAllNotifications {
    deleteAllNotifications {
      ok
      error
    }
  }
`;

export const GET_MY_NOTIFICATIONS = gql`
  query getMyNotifications {
    getMyNotifications {
      id
      body
      createdAt
      uri
    }
  }
`;

export const NOTIFICATION_UPDATES = gql`
  subscription notificationUpdates {
    notificationUpdates {
      id
      body
      createdAt
      uri
    }
  }
`;

export const GET_HAS_UNREAD_NOTIFICATION = gql`
  query getHasUnreadNotification {
    getHasUnreadNotification
  }
`;

export const READ_ALL_NOTIFICATIONS = gql`
  mutation readAllNotifications {
    readAllNotifications {
      ok
      error
    }
  }
`;
