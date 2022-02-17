import React, { FC } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeProps } from "./types";

export const Theme: FC<ThemeProps> = ({ children, theme }) => {
  const selectedTheme = createTheme(
    theme === "light"
      ? {
          palette: {
            mode: "light",
            background: {
              default: "#fafafa",
              paper: "#ffffff",
            },
          },
        }
      : {
          palette: {
            mode: "dark",
            background: {
              default: "#303030",
              paper: "#424242",
            },
          },
        }
  );

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
