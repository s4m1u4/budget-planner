import React, { FC, useState } from "react";
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
import { ICategoryData } from "../../types";
import { IRecord } from "../../../../types";

import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "../../Dashboard.styles";
import { ChartsList } from "./Charts.styles";

interface ChartsProps {
  records: IRecord[];
  setNewCategory: (categoryData: ICategoryData) => void;
}

export const Charts: FC<ChartsProps> = ({ setNewCategory, records }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  const recordIncome: IRecord[] = calculateRecordsIncome(records);
  const recordsExpense: IRecord[] = calculateRecordsExpense(records);

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
