import React, { FC, ReactChild, ReactNode } from "react";
import { Box, Modal } from "@mui/material";

import { style } from "./ModalComponent.styles";

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
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
