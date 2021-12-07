import React from "react";
import { box } from "./SignupPage.styles";
import { Box, Container } from "@mui/material";
import SignupFormContainer from "../SignupForm/SignupForm.container";

const SignupPage = () => {
  return (
    <Container>
      <Box sx={box}>
        <SignupFormContainer />
      </Box>
    </Container>
  );
};

export default SignupPage;
