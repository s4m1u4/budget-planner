import React, { FC } from "react";
import { RecordsItem } from "../RecordsItem";
import { IFilters } from "../../../types";
import { IRecord } from "../../../../../types";

import { RecordsListWrapper } from "./RecordsList.styles";

interface RecordsListProps {
  page: number;
  filters: IFilters;
  records: IRecord[];
  getFilteredHistories: (type: string, category: string, page: number) => void;
  deleteHistory: (id: string) => void;
}

export const RecordsList: FC<RecordsListProps> = ({
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
