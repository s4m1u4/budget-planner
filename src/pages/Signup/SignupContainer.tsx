import { Signup } from "./Signup";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { SignupProps } from "./types";

export const SignupContainer = compose<SignupProps, {}>(
  inject(
    ({
      rootStore: {
        userStore: { userRegistration },
      },
    }) => ({ userRegistration })
  ),
  observer
)(Signup);
