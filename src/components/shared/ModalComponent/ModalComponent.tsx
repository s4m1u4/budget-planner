import React, { FC, ReactChild, ReactNode } from "react";
import { Modal } from "@mui/material";

import { ModalWrapper } from "./ModalComponent.styles";

interface ModalComponentProps {
  open: boolean;
  onClose: () => void;
  children: ReactChild | ReactNode;
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
