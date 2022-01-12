import React, { FC } from "react";
import { Box, Container } from "@mui/material";
import { SignupForm } from "./components";
import { SignupProps } from "./types";

import { box } from "./Signup.styles";

export const Signup: FC<SignupProps> = ({ userRegistration }) => {
  return (
    <Container>
      <Box sx={box}>
        <SignupForm userRegistration={userRegistration} />
      </Box>
    </Container>
  );
};
