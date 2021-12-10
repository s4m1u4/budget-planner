import { inject, observer } from "mobx-react";
import SignupForm from "./SignupForm";

const SignupFormContainer = inject(
  ({
    rootStore: {
      userStore: { userRegistration },
    },
  }) => ({ userRegistration })
)(observer(SignupForm));

export default SignupFormContainer;
