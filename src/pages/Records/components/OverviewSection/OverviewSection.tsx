import React, { Dispatch, FC, SetStateAction } from "react";
import { RecordsList } from "./RecordsList";
import { IRecord } from "../../../../types";
import { calculateBudgetAmount } from "../../../Dashboard/components/Overview/helpers";
import { ConnectDropTarget } from "react-dnd";
import currency from "currency.js";

import {
  Section,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from "../../Records.styles";
import { Amount, AmountTitle, AmountTotal } from "./OverviewSection.styles";

interface OverviewSectionProps {
  isOver: boolean;
  dropRef: ConnectDropTarget;
  selectedRecords: IRecord[];
  setSelectedRecords: Dispatch<SetStateAction<IRecord[]>>;
}

export const OverviewSection: FC<OverviewSectionProps> = ({
  isOver,
  dropRef,
  selectedRecords,
  setSelectedRecords,
}) => {
  const budgetAmount: number = calculateBudgetAmount(selectedRecords);

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Overview</SectionTitle>
      </SectionHeader>
      <SectionFooter
        ref={dropRef}
        style={{ backgroundColor: isOver ? "#f5f5f5" : "inherit" }}
      >
        {selectedRecords.length ? (
          <>
            <Amount>
              <AmountTitle>Amount:</AmountTitle>
              <AmountTotal>{currency(budgetAmount).format()}</AmountTotal>
            </Amount>
            <RecordsList
              selectedRecords={selectedRecords}
              setSelectedRecords={setSelectedRecords}
            />
          </>
        ) : (
          <p>Drag and drop records here🤚</p>
        )}
      </SectionFooter>
    </Section>
  );
};
