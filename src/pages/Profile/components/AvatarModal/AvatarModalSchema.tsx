import * as yup from "yup";

export const AvatarModalSchema = yup.object({
  avatar: yup.string().required("Avatar is required"),
});
