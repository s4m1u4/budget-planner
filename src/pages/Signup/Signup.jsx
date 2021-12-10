import React from "react";
import { box } from "./Signup.styles";
import { Box, Container } from "@mui/material";
import SignupFormContainer from "./SignupForm/SignupForm.container";

const Signup = () => {
  return (
    <Container>
      <Box sx={box}>
        <SignupFormContainer />
      </Box>
    </Container>
  );
};

export default Signup;
