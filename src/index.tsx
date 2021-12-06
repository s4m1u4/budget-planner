import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import "./assets/styles/index.css";
import RootStore from "./store/RootStore";

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    {/*<Provider rootStore={rootStore}>*/}
    {/*  <App />*/}
    {/*</Provider>*/}
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
