import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { HeaderMenu, HeaderNavigation } from "./components";

export const Header = ({ userData, setIsAuth }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              padding: { xs: "0" },
              minHeight: { xs: "64px" },
            }}
          >
            <HeaderNavigation />
            <HeaderMenu userData={userData} setIsAuth={setIsAuth} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
