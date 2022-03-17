import React, { FC } from "react";
import { useFormik } from "formik";
import {
  ButtonComponent,
  InputComponent,
  ModalComponent,
} from "components/shared";
import { AvatarModalSchema } from "./AvatarModalSchema";
import { IAvatarLink, IUserData } from "types";

import { ButtonGroup, Title } from "./AvatarModal.styles";

interface AvatarModalProps {
  open: boolean;
  handleClose: () => void;
  setNewAvatar: (avatar: IAvatarLink) => void;
  getUserData: () => IUserData;
  setUserData: () => void;
  onSubmit: (value: IAvatarLink) => void;
}

export const AvatarModal: FC<AvatarModalProps> = ({
  open,
  handleClose,
  setNewAvatar,
  getUserData,
  setUserData,
  onSubmit,
}) => {
  const handleSubmit = async (values: IAvatarLink) => {
    await setNewAvatar(values);
    await getUserData();
    handleClose();
    await setUserData();
    onSubmit(values);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      avatar: "",
    },
    validationSchema: AvatarModalSchema,
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
