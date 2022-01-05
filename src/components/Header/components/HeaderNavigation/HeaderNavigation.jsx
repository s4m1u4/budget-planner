import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

export const HeaderNavigation = () => {
  return (
    <Box>
      <Button color="inherit" component={Link} to="/dashboard">
        Dashboard
      </Button>
      <Button color="inherit" component={Link} to="/records">
        Records
      </Button>
    </Box>
  );
};
