import React from "react";
import { Button } from "./ButtonComponent.styles";

export const ButtonComponent = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
