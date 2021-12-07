import { inject, observer } from "mobx-react";
import LoginForm from "./LoginForm";

const LoginFormContainer = inject(
  ({
    rootStore: {
      userStore: { setIsAuth },
    },
  }) => ({ setIsAuth })
)(observer(LoginForm));

export default LoginFormContainer;
