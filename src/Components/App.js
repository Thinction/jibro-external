import { useReactiveVar } from "@apollo/client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { isLoggedInVar } from "../client";
import GlobalStyles from "../Styles/GlobalStyles";
import theme from "../Styles/theme";
import AppRouter from "./Routes";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppRouter isLoggedIn={isLoggedIn} />
      </ThemeProvider>
    </>
  );
}

export default App;
