import React from "react";
import { Input, Label, Message, TextField } from "./InputComponent.styles";

export const InputComponent = ({
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
