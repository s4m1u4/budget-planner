import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import user from "../../../store/User";

const SignupSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .matches(/^[A-z]{2,15}$/, "Enter a valid first name")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .matches(/^[A-z]{2,15}$/, "Enter a valid last name")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  role: yup.string("Select your role").required("Role is required"),
});

const SignupForm = () => {
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      user.setSignupData(values);
      formik.resetForm();
    },
  });

  return (
    <Box sx={box}>
      <Typography variant="h6" component="h1" sx={title}>
        Sign up
      </Typography>
      <Box sx={form} component="form" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name="firstName"
          type="text"
          size="small"
          label="First name"
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.firstName && !!formik.errors.firstName}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          name="lastName"
          type="text"
          size="small"
          label="Last name"
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.lastName && !!formik.errors.lastName}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
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
        <TextField
          select
          fullWidth
          name="role"
          size="small"
          label="Role"
          value={formik.values.role}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.role && !!formik.errors.role}
          helperText={formik.touched.role && formik.errors.role}
        >
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </TextField>
        <Button variant="contained" color="success" type="submit">
          Sign up
        </Button>
      </Box>
      <Box sx={info}>
        <Typography variant="body2" component="p">
          Already have an account? <Link to="/login">Sign in</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupForm;
