import React, { FC } from "react";
import { useFormik } from "formik";
import {
  ButtonComponent,
  InputComponent,
  ModalComponent,
} from "../../../../components/shared";
import { ProfileModalAvatarSchema } from "./ProfileModalAvatarSchema";
import { IAvatarLink, IUserData } from "../../../../types/types";

import { ButtonGroup, Title } from "./ProfileModalAvatar.styles";

interface ProfileModalAvatarProps {
  open: boolean;
  handleClose: () => void;
  setNewAvatar: (avatar: IAvatarLink) => void;
  getUserData: () => IUserData;
  setUserData: () => void;
}

export const ProfileModalAvatar: FC<ProfileModalAvatarProps> = ({
  open,
  handleClose,
  setNewAvatar,
  getUserData,
  setUserData,
}) => {
  const handleSubmit = async (values: IAvatarLink) => {
    await setNewAvatar(values);
    await getUserData();
    handleClose();
    await setUserData();
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      avatar: "",
    },
    validationSchema: ProfileModalAvatarSchema,
    onSubmit: handleSubmit,
  });

  return (
    <ModalComponent open={open} onClose={handleClose}>
      <Title>Set a new avatar</Title>
      <form onSubmit={formik.handleSubmit}>
        <InputComponent
          fullWidth
          label="Link to avatar"
          type="text"
          name="avatar"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.avatar || ""}
          error={(formik.touched.avatar && !!formik.errors.avatar) || false}
          helperText={(formik.touched.avatar && formik.errors.avatar) || ""}
        />
        <ButtonGroup>
          <ButtonComponent
            type="submit"
            color="success"
            onClick={formik.handleSubmit}
          >
            Change
          </ButtonComponent>
          <ButtonComponent type="button" color="error" onClick={handleClose}>
            Cancel
          </ButtonComponent>
        </ButtonGroup>
      </form>
    </ModalComponent>
  );
};
