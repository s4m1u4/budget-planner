import React, { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import { box } from "./HomePage.styles";

const HomePage: FC = () => {
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

export default HomePage;
