import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChamadoProvider } from "./context/ChamadoContext";
import "./styles/global.css"; // 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChamadoProvider>
      <App />
    </ChamadoProvider>
  </React.StrictMode>
);
