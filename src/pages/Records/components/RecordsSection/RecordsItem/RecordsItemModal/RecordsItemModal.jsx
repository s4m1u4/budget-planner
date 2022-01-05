import React from "react";
import currency from "currency.js";
import { ModalComponent } from "../../../../../../components/shared";
import { Button } from "@mui/material";

import { ButtonGroup, Payment, Title } from "./RecordsItemModal.styles";
import { PaymentTitle, PaymentTotal } from "../../RecordsSection.styles";

export const RecordsItemModal = ({
  open,
  record,
  handleClose,
  handleDeleteRecord,
}) => {
  return (
    <ModalComponent open={open} onClose={handleClose}>
      <Title>Do you want to delete the record?</Title>
      <Payment>
        <PaymentTitle>
          {record.type} from {record.category.title}
        </PaymentTitle>
        <PaymentTotal color={record.type}>
          {record.type === "income"
            ? currency(record.amount, { pattern: `+!#` }).format()
            : currency(record.amount, { pattern: `-!#` }).format()}
        </PaymentTotal>
      </Payment>
      <ButtonGroup>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeleteRecord(record.id)}
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
