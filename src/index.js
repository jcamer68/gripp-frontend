import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <StrictMode>
  <>
    <ColorModeScript />
    <App />
  </>
  // </StrictMode>
);
