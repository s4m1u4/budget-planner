import React, { FC } from "react";
import SignupForm from "../SignupForm/SignupForm";
import { Container } from "@mui/material";

const SignupPage: FC = () => {
  return (
    <Container>
      <SignupForm />
    </Container>
  );
};

export default SignupPage;
