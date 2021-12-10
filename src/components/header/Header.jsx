import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { clearToken } from "../../helpers";

const Header = ({ userData, setIsAuth }) => {
  const { firstName, lastName } = userData;

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlerSignOut = () => {
    setAnchorElUser(null);
    clearToken();
    setIsAuth();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <Typography variant="body1" component="p">
              {firstName ? firstName : ""} {lastName ? lastName : ""}
            </Typography>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Oleg"
                src="https://img.tsn.ua/cached/323/tsn-ed71814124f95cefb3093cdb7dd2dd14/thumbs/428x268/56/47/8dc4041741a13232fff9ce5a76e64756.jpeg"
              />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                component={Link}
                to="/profile"
                onClick={handleCloseUserMenu}
              >
                <Typography>Profile</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handlerSignOut}>
                <Typography>Sign out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
