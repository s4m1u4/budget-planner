export const calculateRecordsByType = (records, filters) => {
  return records.filter((record) => record.type === filters.type);
};

export const calculateRecordsByCategories = (records, filters) => {
  const result = [];

  for (let i = 0; i < filters.categories.length; i++) {
    const filteredRecords = records.filter((record) => {
      return record.category.title === filters.categories[i];
    });

    if (!filteredRecords.length) {
      return [];
    }

    result.push(...filteredRecords);
  }

  return result;
};
