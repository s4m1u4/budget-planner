import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import user from "../../../store/User";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const LoginSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const box = {
    margin: "0 auto",
    padding: "20px 0",
    width: "100%",
    maxWidth: "400px",
  };

  const title = {
    textAlign: "center",
    margin: "0 0 10px 0",
  };

  const form = {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    margin: "0 0 15px 0",
    padding: "20px",
    border: "1px solid rgb(208, 215, 222)",
    borderRadius: "6px",
  };

  const info = {
    padding: "15px 20px",
    border: "1px solid rgb(208, 215, 222)",
    borderRadius: "6px",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      user.setLogin();
      navigate("/private");
      formik.resetForm();
    },
  });

  return (
    <Box sx={box}>
      <Typography variant="h6" component="h1" sx={title}>
        Sign in
      </Typography>
      <Box sx={form} component="form" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name="email"
          type="text"
          size="small"
          label="Email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          name="password"
          type="password"
          size="small"
          label="Password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button variant="contained" color="success" type="submit">
          Sign in
        </Button>
      </Box>
      <Box sx={info}>
        <Typography variant="body2" component="p">
          Don't have an account yet? <Link to="/signup">Create an account</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
