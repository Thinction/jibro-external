import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import theme from '../Styles/theme';
import AppRouter from './Routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
