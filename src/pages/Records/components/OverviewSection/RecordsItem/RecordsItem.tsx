import React, { Dispatch, FC, SetStateAction } from "react";
import currency from "currency.js";
import { IconButton, Stack } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { IRecord } from "types";

import {
  Payment,
  PaymentTotal,
} from "../../RecordsSection/RecordsSection.styles";

interface RecordsItemProps {
  record: IRecord;
  setSelectedRecords: Dispatch<SetStateAction<IRecord[]>>;
}

export const RecordsItem: FC<RecordsItemProps> = ({
  record,
  setSelectedRecords,
}) => {
  const handleDelete = (selectedRecord: IRecord) => {
    setSelectedRecords((prevState: IRecord[]) =>
      prevState.filter((record: IRecord) => record.id !== selectedRecord.id)
    );
  };

  return (
    <Payment>
      <p>
        {record.type} from {record.category?.title}
      </p>
      <Stack direction="row" sx={{ alignItems: "center", gap: "5px" }}>
        <PaymentTotal color={record.type}>
          {record.type === "income"
            ? currency(record.amount, { pattern: `+!#` }).format()
            : currency(record.amount, { pattern: `-!#` }).format()}
        </PaymentTotal>
        <IconButton
          sx={{ padding: 0 }}
          size="small"
          onClick={() => handleDelete(record)}
        >
          <DeleteForeverRoundedIcon />
        </IconButton>
      </Stack>
    </Payment>
  );
};
