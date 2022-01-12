import React from "react";
import { Link } from "react-router-dom";
import { NotFoundBox } from "./NotFound.styles";
import pageNotFound from "../../assets/images/page-not-found.png";
import { Button, Container } from "@mui/material";

export const NotFound = () => {
  return (
    <Container>
      <NotFoundBox>
        <h1>Page not found</h1>
        <img src={pageNotFound} alt="Page not found" />
        <Button
          component={Link}
          to="/dashboard"
          variant="contained"
          color="success"
        >
          Come back
        </Button>
      </NotFoundBox>
    </Container>
  );
};
