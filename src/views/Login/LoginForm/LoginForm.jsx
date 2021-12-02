import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

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
  const Box = styled.div({
    margin: "0 auto",
    padding: "20px 0",
    width: "100%",
    maxWidth: "350px",
  });

  const Form = styled.form({
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    margin: "0 0 15px 0",
    padding: "20px",
    border: "1px solid rgb(208, 215, 222)",
    borderRadius: "6px",
  });

  const Wrapper = styled.div({
    padding: "15px 20px",
    border: "1px solid rgb(208, 215, 222)",
    borderRadius: "6px",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <Box>
      <Typography
        variant="h6"
        component="h1"
        sx={{ textAlign: "center", margin: "0 0 10px 0" }}
      >
        Sign in
      </Typography>
      <Form onSubmit={formik.handleSubmit}>
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
          Login
        </Button>
      </Form>
      <Wrapper>
        <Typography variant="body2" component="p">
          Don't have an account yet?{" "}
          <Link to="/signup">Create an account.</Link>
        </Typography>
      </Wrapper>
    </Box>
  );
};

export default LoginForm;
