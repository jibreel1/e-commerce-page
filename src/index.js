import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
   typography: {
      fontFamily: "'Kumbh Sans',sans-serif",
   },
});

root.render(
   <ThemeProvider theme={theme}>
      <App />
   </ThemeProvider>
);
