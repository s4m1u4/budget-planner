import React from "react";
import { Box, Container } from "@mui/material";
import { box } from "./LoginPage.styles";
import LoginFormContainer from "../LoginForm/LoginForm.container";

const LoginPage = () => {
  return (
    <Container>
      <Box sx={box}>
        <LoginFormContainer />
      </Box>
    </Container>
  );
};

export default LoginPage;
