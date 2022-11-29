import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
