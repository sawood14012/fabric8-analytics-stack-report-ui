import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./index.scss";
import App from "./app/App";
import CRDALoader from "./app/components/main-components/EmptyLayout/EmptyLayout";
import ErrorPage from "./app/components/main-components/ErrorHandler/ErrorHandler";

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

const Loader = <CRDALoader loading={false} />;
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/stack/analyze/:id/:uuid" component={App} />
      <Route component={CRDALoader} />
    </Switch>
  </Router>,
  document.getElementById("root"),
);
