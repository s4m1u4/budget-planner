import React, { FC } from "react";
import SignupForm from "../SignupForm/SignupForm";
import { Box, Container } from "@mui/material";
import { box } from "./SignupPage.styles";

const SignupPage: FC = () => {
  return (
    <Container>
      <Box sx={box}>
        <SignupForm />
      </Box>
    </Container>
  );
};

export default SignupPage;
