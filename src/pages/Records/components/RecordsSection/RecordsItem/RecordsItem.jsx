import React, { useState } from "react";
import currency from "currency.js";
import { IconButton, Stack } from "@mui/material";
import { RecordsItemModal } from "./RecordsItemModal";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import { Payment, PaymentTitle, PaymentTotal } from "../RecordsSection.styles";

export const RecordsItem = ({
  page,
  filters,
  record,
  getFilteredHistories,
  deleteHistory,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  const handleDeleteRecord = async (id) => {
    await deleteHistory(id);
    await getFilteredHistories(filters.type, filters.category, page);
    handleClose();
  };

  return (
    <Payment>
      <RecordsItemModal
        record={record}
        open={isOpenModal}
        handleClose={handleClose}
        handleDeleteRecord={handleDeleteRecord}
      />
      <PaymentTitle>
        {record.type} from {record.category.title}
      </PaymentTitle>
      <Stack direction="row" sx={{ alignItems: "center", gap: "5px" }}>
        <PaymentTotal color={record.type}>
          {record.type === "income"
            ? currency(record.amount, { pattern: `+!#` }).format()
            : currency(record.amount, { pattern: `-!#` }).format()}
        </PaymentTotal>
        <IconButton disabled size="small">
          <EditRoundedIcon />
        </IconButton>
        <IconButton sx={{ padding: 0 }} size="small" onClick={handleOpen}>
          <DeleteForeverRoundedIcon />
        </IconButton>
      </Stack>
    </Payment>
  );
};
