import React, { Dispatch, FC, SetStateAction } from "react";
import { RecordsItem } from "../RecordsItem";
import { IRecord } from "types";

import { RecordsListWrapper } from "./RecordsList.styles";

interface RecordsListProps {
  selectedRecords: IRecord[];
  setSelectedRecords: Dispatch<SetStateAction<IRecord[]>>;
}

export const RecordsList: FC<RecordsListProps> = ({
  selectedRecords,
  setSelectedRecords,
}) => {
  return (
    <RecordsListWrapper>
      {selectedRecords.map((record) => (
        <RecordsItem
          key={record.id}
          record={record}
          setSelectedRecords={setSelectedRecords}
        />
      ))}
    </RecordsListWrapper>
  );
};
