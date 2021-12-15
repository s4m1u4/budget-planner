import React from "react";
import { box } from "./Home.styles";
import { Box, Container, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Container>
      <Box sx={box}>
        <Typography variant="h4" component="h1">
          Home page
        </Typography>
      </Box>
    </Container>
  );
};
