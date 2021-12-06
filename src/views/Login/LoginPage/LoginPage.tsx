import React, { FC } from "react";
import { Box, Container } from "@mui/material";
import LoginForm from "../LoginForm/LoginForm";
import { box } from "./LoginPage.styles";

const LoginPage: FC = () => {
  return (
    <Container>
      <Box sx={box}>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default LoginPage;
