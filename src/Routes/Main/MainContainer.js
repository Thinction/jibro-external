import React from "react";
import styled from "styled-components";
import Main from "./Main";
import MainWeb from "./MainWeb";

const Container = styled.div`
  max-width: ${(p) => (p.mobile ? "720px" : "100vw")};
  width: 100%;
  min-height: 100vh;
  padding: ${(p) => (p.mobile ? "unset" : "0 calc(50vw - 640px)")};
  margin: 0 auto;
  background: #fff;
`;

const MainContainer = ({ mobile, isLoggedIn }) => {
  return (
    <Container mobile={mobile}>
      {mobile ? (
        <Main isLoggedIn={isLoggedIn} />
      ) : (
        <MainWeb isLoggedIn={isLoggedIn} />
      )}
    </Container>
  );
};

export default MainContainer;
