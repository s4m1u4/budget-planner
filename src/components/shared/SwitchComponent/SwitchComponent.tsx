import React, { ChangeEvent, FC, useEffect } from "react";
import { SwitchComponentProps } from "./types";

import { MaterialUISwitch } from "./SwitchComponent.styles";

export const SwitchComponent: FC<SwitchComponentProps> = ({ setTheme }) => {
  useEffect(() => {
    setTheme(sessionStorage.getItem("theme") || "light");
  }, [setTheme]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    sessionStorage.setItem("theme", event.target.checked ? "dark" : "light");
    setTheme(sessionStorage.getItem("theme"));
  };

  return (
    <MaterialUISwitch
      sx={{ m: 1 }}
      onChange={handleChange}
      checked={sessionStorage.getItem("theme") === "dark" ? true : false}
    />
  );
};
