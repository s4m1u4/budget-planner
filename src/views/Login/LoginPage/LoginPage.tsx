import React, { FC } from "react";
import { Container } from "@mui/material";
import LoginForm from "../LoginForm/LoginForm";

const LoginPage: FC = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
