import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  ${(p) => p.theme.headLine6}
`;

const DateText = ({ text }) => {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
};

export default DateText;
