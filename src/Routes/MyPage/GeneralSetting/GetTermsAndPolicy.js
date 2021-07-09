import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import TermsAndPolicy from "./TermsAndPolicy";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const GetTermsAndPolicy = () => {
  const history = useHistory();
  return (
    <Container>
      <TermsAndPolicy title="지브로 안내" history={history} />
    </Container>
  );
};

export default GetTermsAndPolicy;
