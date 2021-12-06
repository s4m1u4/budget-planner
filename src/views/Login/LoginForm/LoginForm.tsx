import React, { FC } from "react";
import { useFormik } from "formik";
import userStore from "../../../store/UserStore";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { LoginSchema } from "./LoginForm.schema";
import { box, form, info, title } from "./LoginForm.styles";

const LoginForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      userStore.setIsAuth();
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
