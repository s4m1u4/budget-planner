export const calculateBudgetAmount = (records) => {
  return records.reduce((acc, value) => acc + +value.amount, 0);
};
