import { useMutation } from "@apollo/client";
import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { READ_MESSAGES } from "../../gql/Message";
import ChatRoom from "./ChatRoom";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: #fff;
`;

const ChatRoomContainer = ({ mobile }) => {
  const [readMessageMutation] = useMutation(READ_MESSAGES);
  const readMessage = (roomId, update) => {
    readMessageMutation({
      variables: { roomId },
      update,
    });
  };
  return (
    <Container>
      <ChatRoom mobile={mobile} readMessage={readMessage} />
    </Container>
  );
};

export default withRouter(ChatRoomContainer);
