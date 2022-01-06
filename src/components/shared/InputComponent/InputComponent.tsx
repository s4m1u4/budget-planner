import React, { FC } from "react";

import { Input, Label, Message, TextField } from "./InputComponent.styles";

interface InputComponentProps {
  name: string;
  type: string;
  label: string;
  error: boolean;
  value: string;
  helperText: string;
  onChange: any;
  id?: string;
  onBlur?: any;
  fullWidth?: boolean;
}

export const InputComponent: FC<InputComponentProps> = ({
  label,
  error,
  helperText,
  fullWidth,
  ...props
}) => {
  return (
    <TextField>
      <Label error={error} htmlFor={props.id}>
        {label}
      </Label>
      <Input error={error} fullWidth={fullWidth} {...props} />
      <Message>{error && helperText}</Message>
    </TextField>
  );
};
