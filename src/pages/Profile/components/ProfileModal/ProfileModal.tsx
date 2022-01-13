import React, { ChangeEvent, FC, useState } from "react";
import {
  ButtonComponent,
  InputComponent,
  ModalComponent,
} from "../../../../components/shared";
import { ProfileModalSchema } from "./ProfileModalSchema";
import { useFormik } from "formik";
import { IPasswordData } from "../../../Records/types";
import { Alert } from "@mui/material";

import { ButtonGroup, Title } from "./ProfileModal.styles";

interface ProfileModalProps {
  open: boolean;
  handleClose: () => void;
  setNewPassword: (passwordData: IPasswordData) => string | null;
}

export const ProfileModal: FC<ProfileModalProps> = ({
  open,
  handleClose,
  setNewPassword,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (values: IPasswordData) => {
    const responseError: string | null = await setNewPassword(values);
    responseError && setErrorMessage(responseError);
    !responseError && formik.resetForm();
    !responseError && handleClose();
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatedPassword: "",
    },
    validationSchema: ProfileModalSchema,
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
