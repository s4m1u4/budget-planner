import { makeAutoObservable } from "mobx";
import { getToken } from "../../helpers";

export class DashboardStore {
  limit = 0;
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

  setLimit = (amount) => {
    this.limit = Math.ceil(amount / 10);
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

  getHistories = async (page, limit) => {
    try {
      const { histories, historiesLength } = await this.api.fetchRequest({
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

  getFilteredHistories = async (type, category, page) => {
    try {
      const { histories, historiesLength } = await this.api.fetchRequest({
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

  deleteHistory = async (id) => {
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
}
