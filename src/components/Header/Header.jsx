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

export const Header = ({ userData, setIsAuth }) => {
  const { firstName, lastName, avatar } = userData;

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(null);

  const handleOpenUserMenu = (event) => {
    setIsUserMenuOpen(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setIsUserMenuOpen(null);
  };

  const handlerSignOut = () => {
    setIsUserMenuOpen(null);
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
              {firstName && firstName} {lastName && lastName}
            </Typography>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={firstName && firstName}
                src={
                  avatar
                    ? null
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEDRhK8UmJi2f3KBGti-__WjKErf1ahArGg&usqp=CAU"
                }
              />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={isUserMenuOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(isUserMenuOpen)}
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
