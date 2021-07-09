import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import Chat from "./Chat";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: #fff;
`;

const ChatContainer = () => {
  return (
    <Container>
      <Chat />
    </Container>
  );
};

export default withRouter(ChatContainer);
