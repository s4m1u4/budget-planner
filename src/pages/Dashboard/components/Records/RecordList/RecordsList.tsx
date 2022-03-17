import React, { FC } from "react";
import { RecordsItem } from "../RecordsItem";
import { IRecord } from "types";

import { RecordsListWrapper } from "./RecordsList.styles";

interface RecordsListProps {
  lastRecords: IRecord[];
}

export const RecordsList: FC<RecordsListProps> = ({ lastRecords }) => {
  return (
    <RecordsListWrapper>
      {lastRecords.map((record) => (
        <RecordsItem key={record.id} record={record} />
      ))}
    </RecordsListWrapper>
  );
};
