import React, { useState } from "react";
import { ChartsPie } from "./ChartsPie";
import { ChartsForm } from "./ChartsForm";
import { IconButton } from "@mui/material";
import {
  calculateDataIncome,
  calculateDataExpense,
  calculateRecordsIncome,
  calculateRecordsExpense,
  calculateCategoriesIncome,
  calculateCategoriesExpense,
} from "./helpers";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "../../Dashboard.styles";
import { ChartsList } from "./Charts.styles";

export const Charts = ({ setNewCategory, records }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  const recordIncome = calculateRecordsIncome(records);
  const recordsExpense = calculateRecordsExpense(records);

  const categoriesIncome = calculateCategoriesIncome(recordIncome);
  const categoriesExpense = calculateCategoriesExpense(recordsExpense);

  const dataIncome = calculateDataIncome(categoriesIncome, recordIncome);
  const dataExpense = calculateDataExpense(categoriesExpense, recordsExpense);

  return (
    <Section area="charts">
      <SectionHeader>
        <SectionTitle>Charts</SectionTitle>
        <IconButton size="small" sx={{ padding: "0" }} onClick={handleOpen}>
          <AddCircleOutlineSharpIcon />
        </IconButton>
      </SectionHeader>
      <SectionBody>
        <ChartsList>
          <ChartsPie title="Income" data={dataIncome} />
          <ChartsPie title="Expense" data={dataExpense} />
        </ChartsList>
      </SectionBody>
      <ChartsForm
        open={isOpenModal}
        handleClose={handleClose}
        setNewCategory={setNewCategory}
      />
    </Section>
  );
};
