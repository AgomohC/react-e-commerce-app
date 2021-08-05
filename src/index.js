import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AppProvider } from "./contexts/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
// import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
