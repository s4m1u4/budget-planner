import React from "react";
import currency from "currency.js";
import { Amount, AmountTitle, AmountTotal } from "./Overview.styles";
import { calculateBudgetAmount } from "./helpers";

import {
  Section,
  SectionHeader,
  SectionFooter,
  SectionTitle,
} from "../../Dashboard.styles";

export const Overview = ({ records }) => {
  const budgetAmount = calculateBudgetAmount(records);

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
