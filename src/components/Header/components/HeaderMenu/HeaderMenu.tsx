import React, { FC, useState } from "react";
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
import { HeaderProps } from "../../types";

export const HeaderMenu: FC<HeaderProps> = ({
  firstName,
  lastName,
  avatar,
  setIsAuth,
  setTheme,
}) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsUserMenuOpen(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setIsUserMenuOpen(null);
  };

  const handlerSignOut = () => {
    setIsUserMenuOpen(null);
    clearToken();
    sessionStorage.setItem("theme", "light");
    setTheme("light");
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
          src={avatar}
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
