import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.scss";
import "../node_modules/bootstrap/js/index.esm.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);