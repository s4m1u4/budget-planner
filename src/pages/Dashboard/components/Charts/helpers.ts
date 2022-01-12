import { IRecord } from "../../../../types";

export const calculateRecordsIncome: (records: IRecord[]) => IRecord[] = (
  records: IRecord[]
) => {
  return records.filter((record) => record.type === "income");
};

export const calculateRecordsExpense: (records: IRecord[]) => IRecord[] = (
  records: IRecord[]
) => {
  return records.filter((record) => record.type === "expense");
};

export const calculateCategoriesIncome = (recordsIncome: IRecord[]) => {
  return recordsIncome
    .filter(
      (record, index, records) =>
        index ===
        records.findIndex((t) => t.category?.title === record?.category?.title)
    )
    .map((record) => record.category?.title);
};

export const calculateCategoriesExpense = (recordsExpense: IRecord[]) => {
  return recordsExpense
    .filter(
      (record, index, records) =>
        index ===
        records.findIndex((t) => t.category?.title === record.category?.title)
    )
    .map((record) => record.category?.title);
};

export const calculateDataIncome = (
  categoriesIncome: (string | undefined)[],
  recordsIncome: IRecord[]
) => {
  return categoriesIncome.map((category) => ({
    name: category,
    value: recordsIncome.reduce(
      (acc, value) =>
        value.category?.title === category ? acc + +value.amount : acc,
      0
    ),
  }));
};

export const calculateDataExpense = (
  categoriesExpense: (string | undefined)[],
  recordsExpense: IRecord[]
) => {
  return categoriesExpense.map((category) => ({
    name: category,
    value: recordsExpense.reduce(
      (acc, value) =>
        value?.category?.title === category ? acc + +value.amount : acc,
      0
    ),
  }));
};
