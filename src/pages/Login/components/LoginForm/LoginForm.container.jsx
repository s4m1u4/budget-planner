import { inject, observer } from "mobx-react";
import LoginForm from "./LoginForm";

const LoginFormContainer = inject(
  ({
    rootStore: {
      userStore: { userAuthentication },
    },
  }) => ({ userAuthentication })
)(observer(LoginForm));

export default LoginFormContainer;
