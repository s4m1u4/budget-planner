import React, { FC, useState } from "react";
import currency from "currency.js";
import { IconButton, Stack } from "@mui/material";
import { RecordsItemModal } from "./RecordsItemModal";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { IFilters } from "../../../types";
import { IRecord } from "types";
import { useDrag } from "react-dnd";

import { Payment, PaymentTotal } from "../RecordsSection.styles";

interface RecordsItemProps {
  page: number;
  filters: IFilters;
  record: IRecord;
  getFilteredHistories: (type: string, category: string, page: number) => void;
  deleteHistory: (id: string) => void;
}

export const RecordsItem: FC<RecordsItemProps> = ({
  page,
  filters,
  record,
  getFilteredHistories,
  deleteHistory,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  const handleDeleteRecord = async (id: string) => {
    await deleteHistory(id);
    await getFilteredHistories(filters.type, filters.category, page);
    handleClose();
  };

  const [{ isDragging }, dragRef] = useDrag({
    type: "record",
    item: record,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Payment
      ref={dragRef}
      style={{ backgroundColor: isDragging ? "#f5f5f5" : "inherit" }}
    >
      <RecordsItemModal
        record={record}
        open={isOpenModal}
        handleClose={handleClose}
        handleDeleteRecord={handleDeleteRecord}
      />
      <p>
        {record.type} from {record.category?.title}
      </p>
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
