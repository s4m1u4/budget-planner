import { App } from "./App";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";

export interface AppProps {
  isAuth: boolean;
  getUserData: () => void;
}

export const AppContainer = compose<AppProps, {}>(
  inject(
    ({
      rootStore: {
        userStore: { isAuth, getUserData },
      },
    }) => ({ isAuth, getUserData })
  ),
  observer
)(App);
