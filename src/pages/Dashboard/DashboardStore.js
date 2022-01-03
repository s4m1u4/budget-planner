import { makeAutoObservable } from "mobx";
import { getToken } from "../../helpers";

export class DashboardStore {
  histories = [];
  categories = [];
  isLoading = false;

  constructor(api) {
    makeAutoObservable(this);
    this.api = api;
  }

  setIsLoading = () => {
    this.isLoading = !this.isLoading;
  };

  setHistories = (histories) => {
    this.histories = histories;
  };

  setCategories = (categories) => {
    this.categories = categories;
  };

  setNewHistory = async (userDataset) => {
    try {
      this.setIsLoading();
      await this.api.fetchRequest({
        url: "/history",
        method: "post",
        body: userDataset,
        token: getToken(),
      });
      const { histories } = await this.api.fetchRequest({
        url: "/history",
        method: "get",
        body: null,
        token: getToken(),
      });
      this.setHistories(histories);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading();
    }
  };

  setNewCategory = async (userDataset) => {
    try {
      this.setIsLoading();
      await this.api.fetchRequest({
        url: "/category",
        method: "post",
        body: userDataset,
        token: getToken(),
      });
      const { categories } = await this.api.fetchRequest({
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

  getHistories = async () => {
    try {
      const { histories } = await this.api.fetchRequest({
        url: "/history",
        method: "get",
        body: null,
        token: getToken(),
      });
      this.setHistories(histories);
      return histories;
    } catch (error) {
      console.error(error);
    }
  };

  getCategories = async () => {
    try {
      const { categories } = await this.api.fetchRequest({
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
}
