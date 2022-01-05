import React from "react";
import { RecordsItem } from "../RecordsItem";

import { RecordsListWrapper } from "./RecordsList.styles";

export const RecordsList = ({
  page,
  filters,
  records,
  getFilteredHistories,
  deleteHistory,
}) => {
  return (
    <RecordsListWrapper>
      {records.map((record) => (
        <RecordsItem
          key={record.id}
          page={page}
          filters={filters}
          record={record}
          getFilteredHistories={getFilteredHistories}
          deleteHistory={deleteHistory}
        />
      ))}
    </RecordsListWrapper>
  );
};
