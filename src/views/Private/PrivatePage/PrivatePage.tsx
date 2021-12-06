import React, { FC } from "react";
import { Box, Container } from "@mui/material";
import { box } from "./PrivatePage.styles";

const PrivatePage: FC = () => {
  return (
    <Container>
      <Box sx={box}>
        <img src="https://i.gifer.com/XOsX.gif" alt="" />
      </Box>
    </Container>
  );
};

export default PrivatePage;
