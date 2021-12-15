import { App } from "./App";
import { inject, observer } from "mobx-react";

export const AppContainer = inject(
  ({
    rootStore: {
      userStore: { isAuth, getUserData },
    },
  }) => ({ isAuth, getUserData })
)(observer(App));
