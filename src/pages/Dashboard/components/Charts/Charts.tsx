import React, { FC, useEffect, useState } from "react";
import { ChartsPie } from "./ChartsPie";
import { ChartsBar } from "./ChartsBar";
import { ChartsForm } from "./ChartsForm";
import { IconButton } from "@mui/material";
import {
  calculateDataIncome,
  calculateDataExpense,
  calculateRecordsIncome,
  calculateRecordsExpense,
  calculateCategoriesIncome,
  calculateCategoriesExpense,
  calculateUniqueCategories,
  calculateDataChartsBar,
} from "./helpers";
import PieChartIcon from "@mui/icons-material/PieChart";
import BarChartIcon from "@mui/icons-material/BarChart";
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
  useEffect(() => {
    setIsPieChart(
      sessionStorage.getItem("charts") === "pie" ||
        sessionStorage.getItem("charts") === null
        ? true
        : false
    );
  }, []);

  const [isPieChart, setIsPieChart] = useState<boolean>(true);
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

  const uniqueCategories = calculateUniqueCategories(
    categoriesIncome,
    categoriesExpense
  );
  const dataChartsBar = calculateDataChartsBar(
    uniqueCategories,
    dataIncome,
    dataExpense
  );

  const handleClickPieCharts = () => {
    sessionStorage.setItem("charts", "pie");
    setIsPieChart(true);
  };

  const handleClickBarCharts = () => {
    sessionStorage.setItem("charts", "bar");
    setIsPieChart(false);
  };

  return (
    <Section area="charts">
      <SectionHeader>
        <SectionTitle>Charts</SectionTitle>
        <IconsGroup>
          <IconButton
            size="small"
            sx={{ padding: "0" }}
            data-charts="charts-pie"
            onClick={handleClickPieCharts}
          >
            <PieChartIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{ padding: "0" }}
            data-charts="charts-bar"
            onClick={handleClickBarCharts}
          >
            <BarChartIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{ padding: "0" }}
            data-modal="modal-create"
            onClick={handleOpenCreate}
          >
            <AddCircleOutlineSharpIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{ padding: 0 }}
            data-modal="modal-delete"
            onClick={handleOpenDelete}
            disabled={!Boolean(categories.length)}
          >
            <DeleteForeverRoundedIcon />
          </IconButton>
        </IconsGroup>
      </SectionHeader>
      <SectionBody>
        {isPieChart ? (
          <ChartsList>
            <ChartsPie title="Income" data={dataIncome} />
            <ChartsPie title="Expense" data={dataExpense} />
          </ChartsList>
        ) : (
          <ChartsBar data={dataChartsBar} />
        )}
      </SectionBody>
      <ChartsForm
        open={isOpenModalCreate}
        onSubmit={(values) => values}
        handleClose={handleCloseCreate}
        setNewCategory={setNewCategory}
      />
      <ChartsModal
        open={isOpenModalDelete}
        onSubmit={(values) => values}
        handleClose={handleCloseDelete}
        categories={categories}
        deleteCategory={deleteCategory}
      />
    </Section>
  );
};
