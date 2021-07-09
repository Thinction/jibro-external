import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AddEditStep from "./AddEditStep";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  background: #fff;
`;

const CreateService = () => {
  const history = useHistory();
  return (
    <Container>
      <AddEditStep history={history} />
    </Container>
  );
};

export default CreateService;
