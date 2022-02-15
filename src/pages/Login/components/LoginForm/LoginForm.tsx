import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { LoginFormSchema } from "./LoginFormSchema";
import { LoginProps } from "../../types";
import { IUserAuthenticationData } from "../../../../types";

import { boxForm, boxInfo, form, title } from "./LoginForm.styles";

export const LoginForm: FC<LoginProps> = ({ userAuthentication, onSubmit }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    return () => {
      setErrorMessage("");
    };
  }, []);

  const handleSubmit = async (values: IUserAuthenticationData) => {
    const response: string | void = await userAuthentication(values);
    response && setErrorMessage(response);
    !response && navigate("/dashboard");
    !response && formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormSchema,
    onSubmit: async (values: IUserAuthenticationData) => {
      await handleSubmit(values);
      await onSubmit(values);
    },
  });

  const formikHandleChange = (event: ChangeEvent): void => {
    formik.handleChange(event);
    setErrorMessage("");
  };

  return (
    <Box sx={boxForm}>
      <Typography variant="h6" component="h1" sx={title}>
        Sign in
      </Typography>
      <Box sx={form} component="form" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          type="text"
          size="small"
          label="Email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formikHandleChange}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          type="password"
          size="small"
          label="Password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formikHandleChange}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button variant="contained" color="success" type="submit">
          Sign in
        </Button>
      </Box>
      {errorMessage && (
        <Alert variant="filled" severity="error" sx={{ marginBottom: "15px" }}>
          {errorMessage}
        </Alert>
      )}
      <Box sx={boxInfo}>
        <Typography variant="body2" component="p">
          Don't have an account yet? <Link to="/signup">Create an account</Link>
        </Typography>
      </Box>
    </Box>
  );
};
