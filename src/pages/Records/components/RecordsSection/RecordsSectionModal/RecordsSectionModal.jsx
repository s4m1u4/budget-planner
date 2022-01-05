import React from "react";
import { ModalComponent } from "../../../../../components/shared";
import { Button } from "@mui/material";

import { ButtonGroup, Title } from "./RecordsSectionModal.styles";

export const RecordsSectionModal = ({
  open,
  handleClose,
  handleDeleteAllRecords,
}) => {
  return (
    <ModalComponent open={open} onClose={handleClose}>
      <Title>Do you want to delete the entire records?</Title>
      <ButtonGroup>
        <Button
          color="error"
          variant="contained"
          onClick={handleDeleteAllRecords}
        >
          Delete
        </Button>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Cancel
        </Button>
      </ButtonGroup>
    </ModalComponent>
  );
};
