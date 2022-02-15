import * as yup from "yup";

export const AvatarModalSchema = yup.object({
  avatar: yup
    .string()
    .matches(
      /(https|http)?:\/\/[^'"]+?\.(jpg|jpeg|png)/i,
      "Enter a valid link path"
    )
    .required("Avatar is required"),
});
