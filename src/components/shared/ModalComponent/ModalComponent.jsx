import React from "react";
import { Modal } from "@mui/material";
import { ModalWrapper } from "./ModalComponent.styles";

export const ModalComponent = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalWrapper>{children}</ModalWrapper>
    </Modal>
  );
};
