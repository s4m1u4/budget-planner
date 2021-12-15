import React from "react";
import { LoginForm } from "./components";
import { Box, CircularProgress, Container } from "@mui/material";

import { box } from "./Login.styles";

export const Login = ({ userAuthentication, isLoading }) => {
  return (
    <Container>
      <Box sx={box}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <LoginForm userAuthentication={userAuthentication} />
        )}
      </Box>
    </Container>
  );
};
