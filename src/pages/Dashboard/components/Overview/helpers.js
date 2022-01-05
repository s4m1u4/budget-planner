export const calculateBudgetAmount = (records) => {
  const incomeAmount = records
    .filter((record) => record.type === "income")
    .reduce((acc, value) => acc + +value.amount, 0);

  const expenseAmount = records
    .filter((record) => record.type === "expense")
    .reduce((acc, value) => acc + +value.amount, 0);

  return incomeAmount - expenseAmount;
};
