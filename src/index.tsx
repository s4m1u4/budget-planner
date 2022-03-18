import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { RootStore } from "store/RootStore";
import { AppContainer } from "AppContainer";
import { ThemeContainer } from "components/Theme";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./assets/styles/index.css";

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider rootStore={rootStore}>
      <ThemeContainer>
        <DndProvider backend={HTML5Backend}>
          <AppContainer />
        </DndProvider>
      </ThemeContainer>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
