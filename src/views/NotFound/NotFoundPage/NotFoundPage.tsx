import React, { FC } from "react";
import { Link } from "react-router-dom";
import { box } from "./NotFoundPage.styles";
import pageNotFound from "../../../assets/images/page-not-found.png";
import { Box, Button, Container, Typography } from "@mui/material";

const NotFoundPage: FC = () => {
  return (
    <Container>
      <Box sx={box}>
        <Typography variant="h4" component="h1">
          Page not found
        </Typography>
        <img src={pageNotFound} alt="Page not found" />
        <Button component={Link} to="/" variant="contained" color="success">
          Come back
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
