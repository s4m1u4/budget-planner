import React, { FC } from "react";
import currency from "currency.js";
import { calculateBudgetAmount } from "./helpers";
import { IRecord } from "types";

import {
  Section,
  SectionHeader,
  SectionFooter,
  SectionTitle,
} from "../../Dashboard.styles";
import { Amount, AmountTitle, AmountTotal } from "./Overview.styles";

interface OverviewProps {
  records: IRecord[];
}

export const Overview: FC<OverviewProps> = ({ records }) => {
  const budgetAmount: number = calculateBudgetAmount(records);

  return (
    <Section area="overview">
      <SectionHeader>
        <SectionTitle>Overview</SectionTitle>
      </SectionHeader>
      <SectionFooter>
        <Amount>
          <AmountTitle>Amount:</AmountTitle>
          <AmountTotal>{currency(budgetAmount).format()}</AmountTotal>
        </Amount>
      </SectionFooter>
    </Section>
  );
};
