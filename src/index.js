import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import RootStore from "./store/RootStore";
import App from "./App";
import "./assets/styles/index.css";

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider rootStore={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
