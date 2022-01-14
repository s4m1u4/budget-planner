import * as yup from "yup";

export const ProfileModalAvatarSchema = yup.object({
  avatar: yup.string().required("Avatar is required"),
});
