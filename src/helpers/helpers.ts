import { ICategory, IHistory } from "../types";

export const setToken = (token: string) =>
  sessionStorage.setItem("token", token);

export const getToken = () => sessionStorage.getItem("token") || "";

export const clearToken = () => sessionStorage.removeItem("token");

export const isAuth = () => Boolean(getToken());

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
