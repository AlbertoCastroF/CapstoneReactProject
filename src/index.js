import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Route } from "react-router-dom";
import { ContextProvider } from "./Context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <Route>
      <App />
    </Route>
  </ContextProvider>,
  document.getElementById("root")
);
