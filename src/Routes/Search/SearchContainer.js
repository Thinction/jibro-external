import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background: #fff;
`;

const SearchContainer = ({ isLoggedIn }) => {
  return (
    <Container>
      <Search isLoggedIn={isLoggedIn} />
    </Container>
  );
};

export default SearchContainer;
