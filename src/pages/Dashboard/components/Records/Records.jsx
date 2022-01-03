import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { RecordsForm } from "./RecordsForm";
import { RecordsList } from "./RecordList";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

import {
  Section,
  SectionHeader,
  SectionFooter,
  SectionTitle,
} from "../../Dashboard.styles";

export const Records = ({ lastRecords, setNewHistory, categories }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  return (
    <Section area="records">
      <SectionHeader>
        <SectionTitle>Last records</SectionTitle>
        <IconButton
          size="small"
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
        categories={categories}
        handleClose={handleClose}
        setNewHistory={setNewHistory}
      />
    </Section>
  );
};
