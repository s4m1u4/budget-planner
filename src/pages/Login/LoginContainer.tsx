import { Login } from "./Login";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { LoginProps } from "./types";

export const LoginContainer = compose<LoginProps, {}>(
  inject(
    ({
      rootStore: {
        userStore: { userAuthentication },
      },
    }) => ({ userAuthentication })
  ),
  observer
)(Login);
