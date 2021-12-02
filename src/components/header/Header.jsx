import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", columnGap: "10px" }}>
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
          <Link to="/login">Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
