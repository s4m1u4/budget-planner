import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { clearToken } from "../../../../helpers";

export const HeaderMenu = ({ userData, setIsAuth }) => {
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
    <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
      <Typography variant="body1" component="p">
        {firstName && firstName} {lastName && lastName}
      </Typography>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar
          alt={`${firstName && firstName} ${lastName && lastName}`}
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
        <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
          <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/login" onClick={handlerSignOut}>
          <Typography>Sign out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
