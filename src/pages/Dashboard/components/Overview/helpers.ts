import { IRecord } from "../../../../types";

export const calculateBudgetAmount: (records: IRecord[]) => number = (
  records: IRecord[]
) => {
  const incomeAmount: number = records
    .filter((record) => record.type === "income")
    .reduce((acc, value) => acc + +value.amount, 0);

  const expenseAmount: number = records
    .filter((record) => record.type === "expense")
    .reduce((acc, value) => acc + +value.amount, 0);

  return incomeAmount - expenseAmount;
};
