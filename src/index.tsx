import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.scss";
import App from "./app/App";
import EmptySkeleton from "./app/components/main-components/EmptyLayout/EmptyLayout";

if (process.env.NODE_ENV !== "production") {
  /* const config = {
    rules: [
      {
        id: 'color-contrast',
        enabled: false
      }
    ]
  } */
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  // const axe = require("react-axe");
  // axe(React, ReactDOM, 1000, config);
}

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route path="/stack/analyze/:id" component={App} />
      <Route path="/" component={EmptySkeleton} /> 
    </React.StrictMode>
  </Router>,
  document.getElementById("root"),
);
