import React, { FC } from "react";
import { ModalComponent } from "components/shared";
import { Button } from "@mui/material";

import { ButtonGroup, Title } from "./RecordsSectionModal.styles";

interface RecordsSectionModalProps {
  open: boolean;
  handleClose: () => void;
  handleDeleteAllRecords: () => void;
}

export const RecordsSectionModal: FC<RecordsSectionModalProps> = ({
  open,
  handleClose,
  handleDeleteAllRecords,
}) => {
  return (
    <ModalComponent open={open} onClose={handleClose}>
      <Title>Do you want to delete the entire records?</Title>
      <ButtonGroup>
        <Button
          sx={{ color: "#fff" }}
          color="error"
          variant="contained"
          onClick={handleDeleteAllRecords}
        >
          Delete
        </Button>
        <Button
          sx={{ color: "#fff" }}
          variant="contained"
          color="primary"
          onClick={handleClose}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </ModalComponent>
  );
};
