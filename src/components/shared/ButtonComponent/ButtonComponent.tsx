import React, { CSSProperties, FC, ReactChild, ReactNode } from "react";

import { Button } from "./ButtonComponent.styles";

interface ButtonComponentProps {
  onClick: () => void;
  children: ReactChild | ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  style?: CSSProperties;
  color?: string;
  disabled?: boolean;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};
