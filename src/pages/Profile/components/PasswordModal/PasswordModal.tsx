import React, { ChangeEvent, FC, useState } from "react";
import {
  ButtonComponent,
  InputComponent,
  ModalComponent,
} from "components/shared";
import { PasswordModalSchema } from "./PasswordModalSchema";
import { useFormik } from "formik";
import { IPasswordData } from "pages/Records/types";
import { Alert } from "@mui/material";

import { ButtonGroup, Title } from "./PasswordModal.styles";

interface PasswordModalProps {
  open: boolean;
  handleClose: () => void;
  setNewPassword: (passwordData: IPasswordData) => string | null;
  onSubmit: (values: IPasswordData) => void;
}

export const PasswordModal: FC<PasswordModalProps> = ({
  open,
  handleClose,
  setNewPassword,
  onSubmit,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (values: IPasswordData) => {
    const responseError: string | null = await setNewPassword(values);
    responseError && setErrorMessage(responseError);
    !responseError && formik.resetForm();
    !responseError && handleClose();
    onSubmit(values);
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatedPassword: "",
    },
    validationSchema: PasswordModalSchema,
    onSubmit: handleSubmit,
  });

  const formikHandleChange = (event: ChangeEvent): void => {
    formik.handleChange(event);
    setErrorMessage("");
  };

  return (
    <ModalComponent open={open} onClose={handleClose}>
      <Title>Create a new password</Title>
      <form onSubmit={formik.handleSubmit}>
        <InputComponent
          fullWidth
          id="password"
          label="Password"
          type="password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formikHandleChange}
          value={formik.values.password || ""}
          error={(formik.touched.password && !!formik.errors.password) || false}
          helperText={(formik.touched.password && formik.errors.password) || ""}
        />
        <InputComponent
          fullWidth
          id="repeatedPassword"
          label="Repeat password"
          type="password"
          name="repeatedPassword"
          onBlur={formik.handleBlur}
          onChange={formikHandleChange}
          value={formik.values.repeatedPassword || ""}
          error={
            (formik.touched.repeatedPassword &&
              !!formik.errors.repeatedPassword) ||
            false
          }
          helperText={
            (formik.touched.repeatedPassword &&
              formik.errors.repeatedPassword) ||
            ""
          }
        />
        {errorMessage && (
          <Alert
            variant="filled"
            severity="error"
            sx={{ marginBottom: "15px" }}
          >
            {errorMessage}
          </Alert>
        )}
        <ButtonGroup>
          <ButtonComponent
            type="submit"
            color="success"
            onClick={formik.handleSubmit}
          >
            Change
          </ButtonComponent>
          <ButtonComponent type="button" color="error" onClick={handleClose}>
            Cancel
          </ButtonComponent>
        </ButtonGroup>
      </form>
    </ModalComponent>
  );
};
