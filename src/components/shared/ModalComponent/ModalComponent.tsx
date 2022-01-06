import React, { FC } from "react";
import { Modal } from "@mui/material";

import { ModalWrapper } from "./ModalComponent.styles";

interface ModalComponentProps {
  open: boolean;
  onClose: () => void;
}

export const ModalComponent: FC<ModalComponentProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalWrapper>{children}</ModalWrapper>
    </Modal>
  );
};
