import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/private">
              Private
            </Button>
          </Box>
          <Box>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
