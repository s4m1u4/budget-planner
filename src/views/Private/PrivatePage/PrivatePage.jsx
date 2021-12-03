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
        <img
          src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
          alt=""
        />
      </Box>
    </Container>
  );
};

export default PrivatePage;
