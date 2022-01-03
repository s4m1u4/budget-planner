import currency from "currency.js";

export const calculateRecordsIncome = (records) => {
  return records.filter((record) => record.type === "income");
};

export const calculateRecordsExpense = (records) => {
  return records.filter((record) => record.type === "expense");
};

export const calculateCategoriesIncome = (recordsIncome) => {
  return recordsIncome
    .filter(
      (record, index, records) =>
        index ===
        records.findIndex((t) => t.category.title === record.category.title)
    )
    .map((record) => record.category.title);
};

export const calculateCategoriesExpense = (recordsExpense) => {
  return recordsExpense
    .filter(
      (record, index, records) =>
        index ===
        records.findIndex((t) => t.category.title === record.category.title)
    )
    .map((record) => record.category.title);
};

export const calculateDataIncome = (categoriesIncome, recordsIncome) => {
  return categoriesIncome.map((category) => ({
    name: category,
    value: recordsIncome.reduce(
      (acc, value) =>
        value.category.title === category ? acc + +value.amount : acc,
      0
    ),
  }));
};

export const calculateDataExpense = (categoriesExpense, recordsExpense) => {
  return categoriesExpense.map((category) => ({
    name: category,
    value: recordsExpense.reduce(
      (acc, value) =>
        value.category.title === category ? acc + +value.amount : acc,
      0
    ),
  }));
};

export const customTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div
        style={{
          padding: "5px",
          backgroundColor: "#fff",
          border: "1px solid #cccc",
        }}
      >
        <p>{`${payload[0].name} - ${currency(payload[0].value).format()}`}</p>
      </div>
    );
  }
  return null;
};

export const customLabel = ({ value }) => currency(value).format();
