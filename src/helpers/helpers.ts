import { ICategory, IHistory } from "../types";

export const setToken = (token: string) => {
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

export const calculateRecords = (
  histories: IHistory[],
  categories: ICategory[]
) => {
  return histories.map((history) => ({
    ...history,
    category: categories.find(
      (category) => category.id === history.category_id
    ),
  }));
};
