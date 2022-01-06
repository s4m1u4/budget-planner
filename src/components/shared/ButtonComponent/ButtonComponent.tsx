import React, { FC, ReactChild, ReactNode } from "react";

import { Button } from "./ButtonComponent.styles";

interface ButtonComponentProps {
  onClick: () => any;
  children: ReactChild | ReactNode;
  type?: string;
  color?: string;
  disabled?: boolean;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};
