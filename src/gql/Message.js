import { gql } from "@apollo/client";

export const GET_MY_ROOMS = gql`
  query getMyRooms($body: String) {
    getMyRooms(body: $body) {
      id
      #   state  이거 안쓸수도...
      updatedAt
      roomState
      firstMessage
      unread
      user {
        id
        name
        avatar
      }
    }
  }
`;

export const READ_MESSAGES = gql`
  mutation readMessages($roomId: String!) {
    readMessages(roomId: $roomId) {
      ok
      number
      error
    }
  }
`;

export const GET_ROOM = gql`
  query getRoom($roomId: String!) {
    getRoom(roomId: $roomId) {
      ok
      error
      room {
        id
        messages {
          id
          body
          createdAt
          isMine
          from {
            id
            avatar
          }
        }
        user {
          name
          id
        }
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($toId: String!, $body: String) {
    sendMessage(toId: $toId, body: $body) {
      ok
      error
    }
  }
`;

export const MESSAGE_UPDATES = gql`
  subscription messageUpdates {
    messageUpdates {
      id
      body
      createdAt
      roomId
      from {
        id
        name
        avatar
      }
      to {
        id
        name
        avatar
      }
      room {
        id
        updatedAt
        roomState
        firstMessage
        unread
        user {
          id
          name
          avatar
        }
      }
      isMine
    }
  }
`;

export const GET_NUM_OF_UNREADS = gql`
  query getNumOfUnreads {
    getNumOfUnreads
  }
`;

export const GET_OR_CREATE_ROOM = gql`
  mutation getOrCreateRoom($serverId: String!) {
    getOrCreateRoom(serverId: $serverId) {
      ok
      error
      room {
        id
        updatedAt
        roomState
        firstMessage
        unread
        user {
          id
          name
          avatar
        }
      }
    }
  }
`;

export const QUIT_ROOM = gql`
  mutation quitRoom($roomId: String!) {
    quitRoom(roomId: $roomId) {
      ok
      error
    }
  }
`;
