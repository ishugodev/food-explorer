import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyles from "./styles/global";

import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hook/auth";

import { Routes } from "./routes";
import theme from "./styles/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
