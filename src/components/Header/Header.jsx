import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { HeaderMenu, HeaderNavigation } from "./components";

export const Header = ({ userData, setIsAuth }) => {
  return (
    <AppBar position="sticky" sx={{ width: "100%" }}>
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
  );
};
