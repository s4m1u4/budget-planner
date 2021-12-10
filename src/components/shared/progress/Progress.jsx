import React from "react";
import { Box, CircularProgress, Container } from "@mui/material";
import { box } from "./Progress.styles";

const Progress = () => {
  return (
    <Container>
      <Box sx={box}>
        <CircularProgress />
      </Box>
    </Container>
  );
};

export default Progress;
