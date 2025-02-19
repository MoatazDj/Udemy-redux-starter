import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./Store/store";
import Provider from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
