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
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { ICategoryData } from "../../types";
import { ICategory, IRecord } from "../../../../types";
import { ChartsModal } from "./ChartsModal";

import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle,
} from "../../Dashboard.styles";
import { ChartsList } from "./Charts.styles";
import { IconsGroup } from "../../../Records/Records.styles";

interface ChartsProps {
  records: IRecord[];
  categories: ICategory[];
  deleteCategory: (id: string) => void;
  setNewCategory: (categoryData: ICategoryData) => void;
}

export const Charts: FC<ChartsProps> = ({
  setNewCategory,
  deleteCategory,
  records,
  categories,
}) => {
  const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const handleOpenCreate = () => setIsOpenModalCreate(true);
  const handleCloseCreate = () => setIsOpenModalCreate(false);
  const handleOpenDelete = () => setIsOpenModalDelete(true);
  const handleCloseDelete = () => setIsOpenModalDelete(false);

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
        <IconsGroup>
          <IconButton
            size="small"
            sx={{ padding: "0" }}
            onClick={handleOpenCreate}
          >
            <AddCircleOutlineSharpIcon />
          </IconButton>
          <IconButton
            sx={{ padding: 0 }}
            size="small"
            onClick={handleOpenDelete}
            disabled={!Boolean(categories.length)}
          >
            <DeleteForeverRoundedIcon />
          </IconButton>
        </IconsGroup>
      </SectionHeader>
      <SectionBody>
        <ChartsList>
          <ChartsPie title="Income" data={dataIncome} />
          <ChartsPie title="Expense" data={dataExpense} />
        </ChartsList>
      </SectionBody>
      <ChartsForm
        open={isOpenModalCreate}
        handleClose={handleCloseCreate}
        setNewCategory={setNewCategory}
      />
      <ChartsModal
        open={isOpenModalDelete}
        handleClose={handleCloseDelete}
        categories={categories}
        deleteCategory={deleteCategory}
      />
    </Section>
  );
};
