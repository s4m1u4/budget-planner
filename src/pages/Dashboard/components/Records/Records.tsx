import React, { FC, useState } from "react";
import { IconButton } from "@mui/material";
import { RecordsForm } from "./RecordsForm";
import { RecordsList } from "./RecordList";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { ICategory, IRecord } from "../../../../types";
import { IHistoryData } from "../../types";

import {
  Section,
  SectionHeader,
  SectionFooter,
  SectionTitle,
} from "../../Dashboard.styles";

interface RecordsProps {
  lastRecords: IRecord[];
  categories: ICategory[];
  setNewHistory: (historyData: IHistoryData) => void;
}

export const Records: FC<RecordsProps> = ({
  lastRecords,
  setNewHistory,
  categories,
}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  return (
    <Section area="records">
      <SectionHeader>
        <SectionTitle>Last records</SectionTitle>
        <IconButton
          size="small"
          data-modal="modal"
          onClick={handleOpen}
          sx={{ padding: "0" }}
          disabled={!categories.length}
        >
          <AddCircleOutlineSharpIcon />
        </IconButton>
      </SectionHeader>
      <SectionFooter>
        {lastRecords.length ? (
          <RecordsList lastRecords={lastRecords} />
        ) : (
          <p>Records list is empty😔</p>
        )}
      </SectionFooter>
      <RecordsForm
        open={isOpenModal}
        onSubmit={(values) => values}
        categories={categories}
        handleClose={handleClose}
        setNewHistory={setNewHistory}
      />
    </Section>
  );
};
