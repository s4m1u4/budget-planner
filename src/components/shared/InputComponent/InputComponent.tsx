import React, { ChangeEvent, FocusEvent, FC } from "react";

import { Input, Label, Message, TextField } from "./InputComponent.styles";

interface InputComponentProps {
  name: string;
  type: string;
  label: string;
  error: boolean;
  value: string;
  helperText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
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
