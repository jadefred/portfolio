import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18next";
import { PreferenceProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <PreferenceProvider>
      <App />
    </PreferenceProvider>
  </React.StrictMode>
);
