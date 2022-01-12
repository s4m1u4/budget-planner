import React, { ChangeEvent, FC, useState } from "react";
import { IconButton, Pagination, Stack } from "@mui/material";
import { RecordsList } from "./RecordsList";
import { RecordsSectionModal } from "./RecordsSectionModal";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { IFilters } from "../../types";
import { IRecord } from "../../../../types";

import {
  Section,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from "../../Records.styles";

interface RecordsSectionProps {
  page: number;
  setPage: (page: number) => void;
  limit: number;
  filters: IFilters;
  records: IRecord[];
  getFilteredHistories: (type: string, category: string, page: number) => void;
  deleteHistory: (id: string) => void;
  deleteAllHistories: () => void;
}

export const RecordsSection: FC<RecordsSectionProps> = ({
  page,
  setPage,
  limit,
  filters,
  records,
  getFilteredHistories,
  deleteHistory,
  deleteAllHistories,
}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  const handleDeleteAllRecords = async () => {
    setPage(1);
    await deleteAllHistories();
    await getFilteredHistories(filters.type, filters.category, page);
    handleClose();
  };

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
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
