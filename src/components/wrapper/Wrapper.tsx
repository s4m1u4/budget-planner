import React, { FC } from "react";
import { Box } from "@mui/material";

const Wrapper: FC = ({ children }) => {
  return <Box className="wrapper">{children}</Box>;
};

export default Wrapper;
