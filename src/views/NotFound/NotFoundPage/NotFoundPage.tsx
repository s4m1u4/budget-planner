import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import pageNotFound from "../../../assets/images/page-not-found.png";
import { box } from "./NotFoundPage.styles";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <Box sx={box}>
        <Typography variant="h4" component="h1">
          Page not found
        </Typography>
        <img src={pageNotFound} alt="Page not found" />
        <Button onClick={handleClick} variant="contained" color="success">
          Come back
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
