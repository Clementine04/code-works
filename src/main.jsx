import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PerfProvider } from "@/context/PerfContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PerfProvider>
      <App />
    </PerfProvider>
  </React.StrictMode>
);
