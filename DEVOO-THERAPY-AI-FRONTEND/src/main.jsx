import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./components/Routes"; // Ensure this path is correct
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
