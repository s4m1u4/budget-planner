import React, { FC } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { HeaderMenu, HeaderNavigation } from "components/Header/components";
import { HeaderProps } from "components/Header/types";

export const Header: FC<HeaderProps> = (props) => {
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
          <HeaderMenu {...props} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
