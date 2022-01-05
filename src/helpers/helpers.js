export const setToken = (token) => {
  return sessionStorage.setItem("token", token);
};

export const getToken = () => {
  return sessionStorage.getItem("token") || "";
};

export const clearToken = () => {
  return sessionStorage.removeItem("token");
};

export const isAuth = () => {
  return Boolean(getToken());
};

export const calculateRecords = (histories, categories) => {
  return histories.map((history) => ({
    ...history,
    category: categories.find(
      (category) => category.id === history.category_id
    ),
  }));
};
