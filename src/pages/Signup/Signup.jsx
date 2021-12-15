import React from "react";
import { Box, Container } from "@mui/material";
import { SignupForm } from "./components";

import { box } from "./Signup.styles";

export const Signup = ({ userRegistration }) => {
  return (
    <Container>
      <Box sx={box}>
        <SignupForm userRegistration={userRegistration} />
      </Box>
    </Container>
  );
};
