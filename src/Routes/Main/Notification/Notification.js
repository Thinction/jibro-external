import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;
const Content = styled.div`
  ${(p) => p.theme.subTitle2}
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
`;
const ContentText = styled.div`
  align-self: center;
`;
const Time = styled.div`
  ${(p) => p.theme.caption}
  color: rgba(0, 0, 0, 0.6);
`;

const Notification = ({ uri, text, time }) => {
  const history = useHistory();
  return (
    <Container onClick={() => history.push(uri)}>
      <Content>
        <ContentText>{text}</ContentText>
      </Content>
      <Time>{time}</Time>
    </Container>
  );
};

export default Notification;
