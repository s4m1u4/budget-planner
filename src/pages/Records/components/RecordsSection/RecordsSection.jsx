import React, { useState } from "react";
import { IconButton, Pagination, Stack } from "@mui/material";
import { RecordsList } from "./RecordsList";
import { RecordsSectionModal } from "./RecordsSectionModal";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import {
  Section,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from "../../Records.styles";

export const RecordsSection = ({
  page,
  setPage,
  limit,
  filters,
  records,
  getFilteredHistories,
  deleteHistory,
  deleteAllHistories,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  const handleDeleteAllRecords = async () => {
    setPage(1);
    await deleteAllHistories();
    await getFilteredHistories(filters.type, filters.category, page);
    handleClose();
  };

  const handleChangePage = (event, page) => {
    getFilteredHistories(filters.type, filters.category, page);
    setPage(page);
  };

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Records</SectionTitle>
        <RecordsSectionModal
          open={isOpenModal}
          handleClose={handleClose}
          handleDeleteAllRecords={handleDeleteAllRecords}
        />
        <IconButton
          sx={{ padding: 0, marginRight: "10px" }}
          size="small"
          onClick={handleOpen}
          disabled={!Boolean(records.length)}
        >
          <DeleteForeverRoundedIcon />
        </IconButton>
      </SectionHeader>
      <SectionFooter>
        {records.length ? (
          <RecordsList
            page={page}
            filters={filters}
            records={records}
            getFilteredHistories={getFilteredHistories}
            deleteHistory={deleteHistory}
          />
        ) : (
          <p>Records list is empty😔</p>
        )}
        {limit > 1 && (
          <Stack sx={{ alignItems: "center", marginTop: "10px" }}>
            <Pagination
              page={page}
              count={limit}
              size="small"
              color="primary"
              shape="rounded"
              variant="outlined"
              onChange={handleChangePage}
              sx={{ "& button": { margin: "0 3px" } }}
            />
          </Stack>
        )}
      </SectionFooter>
    </Section>
  );
};
