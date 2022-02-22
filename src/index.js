import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles"
import { Provider } from './context/context';

const theme = createTheme()

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

