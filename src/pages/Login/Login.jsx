import React from "react";
import { LoginForm } from "./components";
import { Box, Container } from "@mui/material";

import { box } from "./Login.styles";

export const Login = ({ userAuthentication }) => {
  return (
    <Container>
      <Box sx={box}>
        <LoginForm userAuthentication={userAuthentication} />
      </Box>
    </Container>
  );
};
