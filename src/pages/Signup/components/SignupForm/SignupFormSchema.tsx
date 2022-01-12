import * as yup from "yup";

export const SignupFormSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-z]{4,15}$/, "Enter a valid first name")
    .required("First name is required"),
  lastName: yup
    .string()
    .matches(/^[A-z]{4,15}$/, "Enter a valid last name")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});
