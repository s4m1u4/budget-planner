import { Login } from "./Login";
import { inject, observer } from "mobx-react";

export const LoginContainer = inject(
  ({
    rootStore: {
      userStore: { userAuthentication, isLoading },
    },
  }) => ({ userAuthentication, isLoading })
)(observer(Login));
