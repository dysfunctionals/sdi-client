import React from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import RoutesContainer from "./RoutesContainer";

import "bootstrap/dist/css/bootstrap.css"
 
ReactDOM.render(
      <BrowserRouter>

  <RoutesContainer /> 
      </BrowserRouter>,
  document.getElementById("root")
);