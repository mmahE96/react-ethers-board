import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


