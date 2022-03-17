import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { SwitchComponentContainer } from "components/shared/SwitchComponent";

export const HeaderNavigation: FC = () => {
  return (
    <Box>
      <Button color="inherit" component={Link} to="/dashboard">
        Dashboard
      </Button>
      <Button color="inherit" component={Link} to="/records">
        Records
      </Button>
      <SwitchComponentContainer />
    </Box>
  );
};
