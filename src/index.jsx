import React from "react";
import ReactDOM from "react-dom";
import DarkroomContextProvider from "./contexts/DarkroomContextProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DarkroomContextProvider>
      <App />
    </DarkroomContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
