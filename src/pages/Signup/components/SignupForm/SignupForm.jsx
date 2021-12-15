import React from "react";
import { useFormik } from "formik";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { SignupFormSchema } from "./SignupFormSchema";
import { boxForm, boxInfo, form, title } from "./SignupForm.styles";

export const SignupForm = ({ userRegistration }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: SignupFormSchema,
    onSubmit: (values) => {
      userRegistration(values);
      navigate("/login");
      formik.resetForm();
    },
  });

  return (
    <Box sx={boxForm}>
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
        <Button variant="contained" color="success" type="submit">
          Sign up
        </Button>
      </Box>
      <Box sx={boxInfo}>
        <Typography variant="body2" component="p">
          Already have an account? <Link to="/login">Sign in</Link>
        </Typography>
      </Box>
    </Box>
  );
};
