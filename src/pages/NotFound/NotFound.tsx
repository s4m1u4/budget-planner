import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../../assets/images/page-not-found.png";
import { Button, Container } from "@mui/material";

import { NotFoundBox, Title } from "./NotFound.styles";

export const NotFound = () => {
  return (
    <Container>
      <NotFoundBox>
        <Title>Page not found</Title>
        <img src={pageNotFound} alt="Page not found" />
        <Button
          to="/"
          color="success"
          component={Link}
          className={"btn"}
          variant="contained"
          sx={{ color: "#fff", marginTop: "15px" }}
        >
          Come back
        </Button>
      </NotFoundBox>
    </Container>
  );
};
