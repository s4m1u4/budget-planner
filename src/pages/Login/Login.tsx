import React, { FC } from "react";
import { LoginForm } from "./components";
import { Box, Container } from "@mui/material";
import { LoginProps } from "./types";

import { box } from "./Login.styles";

export const Login: FC<LoginProps> = ({ userAuthentication }) => {
  return (
    <Container>
      <Box sx={box}>
        <LoginForm
          onSubmit={(values) => values}
          userAuthentication={userAuthentication}
        />
      </Box>
    </Container>
  );
};
