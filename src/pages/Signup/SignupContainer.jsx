import { Signup } from "./Signup";
import { inject, observer } from "mobx-react";

export const SignupContainer = inject(
  ({
    rootStore: {
      userStore: { userRegistration },
    },
  }) => ({ userRegistration })
)(observer(Signup));
