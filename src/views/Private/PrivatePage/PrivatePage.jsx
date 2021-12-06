import React from "react";
import { Box, Container } from "@mui/material";

const PrivatePage = () => {
  const box = {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Container>
      <Box sx={box}>
        <img src="https://i.gifer.com/XOsX.gif" alt="" />
      </Box>
    </Container>
  );
};

export default PrivatePage;
