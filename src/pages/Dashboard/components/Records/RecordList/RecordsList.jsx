import React from "react";
import { RecordsItem } from "../RecordsItem";
import { RecordsListWrapper } from "./RecordsList.styles";

export const RecordsList = ({ lastRecords }) => {
  return (
    <RecordsListWrapper>
      {lastRecords.map((record) => (
        <RecordsItem key={record.id} record={record} />
      ))}
    </RecordsListWrapper>
  );
};
