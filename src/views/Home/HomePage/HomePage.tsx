import React, { FC } from "react";
import { box } from "./HomePage.styles";
import { Box, Container, Typography } from "@mui/material";

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
