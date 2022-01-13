import { makeAutoObservable } from "mobx";
import { getToken } from "../../helpers";
import { ICategory, IHistory } from "../../types";
import { ICategoryData, IHistoryData } from "./types";
import { IAPI } from "../../services/API.service";

export interface IDashboardStore {
  limit: number;
  histories: IHistory[];
  categories: ICategory[];
  isLoading: boolean;
  setIsLoading: () => void;
  setHistories: (histories: IHistory[]) => void;
  setCategories: (categories: ICategory[]) => void;
  setLimit: (amount: number) => void;
  setNewHistory: (historyData: IHistoryData) => void;
  setNewCategory: (categoryData: ICategoryData) => void;
  getHistories: (page: number | null, limit: number | null) => void;
  getFilteredHistories: (type: string, category: string, page: number) => void;
  getCategories: () => void;
  deleteHistory: (id: string) => void;
  deleteAllHistories: () => void;
  deleteCategory: (id: string) => void;
}

interface ICategories {
  categories: ICategory[];
}

interface IHistories {
  histories: IHistory[];
  historiesLength: number;
}

export class DashboardStore implements IDashboardStore {
  api: IAPI;
  limit: number = 0;
  histories: IHistory[] = [];
  categories: ICategory[] = [];
  isLoading: boolean = false;

  constructor(api: IAPI) {
    makeAutoObservable(this);
    this.api = api;
  }

  setIsLoading = () => {
    this.isLoading = !this.isLoading;
  };

  setHistories = (histories: IHistory[]) => {
    this.histories = histories;
  };

  setCategories = (categories: ICategory[]) => {
    this.categories = categories;
  };

  setLimit = (amount: number) => {
    this.limit = Math.ceil(amount / 10);
  };

  setNewHistory = async (historyData: IHistoryData) => {
    try {
      this.setIsLoading();
      await this.api.fetchRequest({
        url: "/history",
        method: "post",
        body: historyData,
        token: getToken(),
      });
      const { histories }: IHistories = await this.api.fetchRequest({
        url: "/history",
        method: "get",
        body: null,
        token: getToken(),
        params: {
          limit: 10000,
        },
      });
      this.setHistories(histories);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading();
    }
  };

  setNewCategory = async (categoryData: ICategoryData) => {
    try {
      this.setIsLoading();
      await this.api.fetchRequest({
        url: "/category",
        method: "post",
        body: categoryData,
        token: getToken(),
      });
      const { categories }: ICategories = await this.api.fetchRequest({
        url: "/category",
        method: "get",
        body: null,
        token: getToken(),
      });
      this.setCategories(categories);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading();
    }
  };

  getHistories = async (page?: number | null, limit?: number | null) => {
    try {
      const { histories, historiesLength }: IHistories =
        await this.api.fetchRequest({
          url: "/history",
          method: "get",
          body: null,
          token: getToken(),
          params: {
            page: page ? page : null,
            limit: limit ? limit : null,
          },
        });
      this.setHistories(histories);
      this.setLimit(historiesLength);
      return histories;
    } catch (error) {
      console.error(error);
    }
  };

  getFilteredHistories = async (
    type: string | null,
    category: string | null,
    page: number | null
  ) => {
    try {
      const { histories, historiesLength }: IHistories =
        await this.api.fetchRequest({
          url: "/history",
          method: "get",
          body: null,
          token: getToken(),
          params: {
            type: type ? type : null,
            category: category ? category : null,
            page: page ? page : null,
          },
        });
      this.setHistories(histories);
      this.setLimit(historiesLength);
      return histories;
    } catch (error) {
      console.error(error);
    }
  };

  getCategories = async () => {
    try {
      const { categories }: ICategories = await this.api.fetchRequest({
        url: "/category",
        method: "get",
        body: null,
        token: getToken(),
      });
      this.setCategories(categories);
      return categories;
    } catch (error) {
      console.error(error);
    }
  };

  deleteHistory = async (id: string) => {
    try {
      await this.api.fetchRequest({
        url: "/history",
        method: "delete",
        body: null,
        token: getToken(),
        params: {
          ids: id,
          deleteAll: false,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  deleteAllHistories = async () => {
    try {
      await this.api.fetchRequest({
        url: "/history",
        method: "delete",
        body: null,
        token: getToken(),
        params: {
          deleteAll: true,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  deleteCategory = async (id: string) => {
    try {
      await this.getFilteredHistories(null, id, null);
      for (let i = 0; i < this.histories.length; i++) {
        await this.deleteHistory(this.histories[i].id);
      }
      await this.api.fetchRequest({
        url: "/category",
        method: "delete",
        body: null,
        token: getToken(),
        params: {
          id: id,
        },
      });
      await this.getCategories();
      await this.getHistories(null, 10000);
    } catch (error) {
      console.error(error);
    }
  };
}
