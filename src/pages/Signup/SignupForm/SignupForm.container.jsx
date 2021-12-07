import { inject, observer } from "mobx-react";
import SignupForm from "./SignupForm";

const SignupFormContainer = inject(
  ({
    rootStore: {
      userStore: { setUserData },
    },
  }) => ({ setUserData })
)(observer(SignupForm));

export default SignupFormContainer;
