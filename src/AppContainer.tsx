import { App } from "App";
import { AppProps } from "types";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";

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
