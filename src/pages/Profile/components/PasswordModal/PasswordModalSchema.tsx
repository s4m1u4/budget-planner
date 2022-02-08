import * as yup from "yup";

export const PasswordModalSchema = yup.object({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatedPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Repeat password is required"),
});
