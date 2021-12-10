import React from "react";
import { Box, Container } from "@mui/material";
import { box } from "./Login.styles";
import LoginFormContainer from "./components/LoginForm/LoginForm.container";

const Login = () => {
  return (
    <Container>
      <Box sx={box}>
        <LoginFormContainer />
      </Box>
    </Container>
  );
};

export default Login;
