export const calculateRecords = (histories, categories) => {
  return histories
    .map((history) => ({
      ...history,
      category: categories.find(
        (category) => category.id === history.category_id
      ),
    }))
    .reverse();
};
