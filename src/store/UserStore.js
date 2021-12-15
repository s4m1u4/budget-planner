import { makeAutoObservable } from "mobx";
import { getToken, isAuth, setToken } from "../helpers";

export class UserStore {
  userData = {};
  isAuth = isAuth();
  isLoading = false;

  constructor(api) {
    makeAutoObservable(this);
    this.api = api;
  }

  setUserData = (userData) => {
    this.userData = userData;
  };

  setIsAuth = () => {
    this.isAuth = isAuth();
  };

  setIsLoading = () => {
    this.isLoading = !this.isLoading;
  };

  userRegistration = async (userDataset) => {
    try {
      this.setIsLoading();
      await this.api.fetchRequest({
        url: "/user/register",
        method: "post",
        body: userDataset,
        token: null,
      });
      this.setIsAuth();
    } catch (error) {
      return error.response.data.details;
    } finally {
      this.setIsLoading();
    }
  };

  userAuthentication = async (userDataset) => {
    try {
      this.setIsLoading();
      const { token } = await this.api.fetchRequest({
        url: "/user/login",
        method: "post",
        body: userDataset,
        token: null,
      });
      setToken(token);
      this.setIsAuth();
    } catch (error) {
      return error.response.data.details;
    } finally {
      this.setIsLoading();
    }
  };

  setNewUserData = async (userDataset) => {
    try {
      this.setIsLoading();
      await this.api.fetchRequest({
        url: "/user",
        method: "patch",
        body: userDataset,
        token: getToken(),
      });
      const userData = await this.api.fetchRequest({
        url: "/user",
        method: "get",
        body: null,
        token: getToken(),
      });
      this.setUserData(userData);
      this.setIsAuth();
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading();
    }
  };

  getUserData = async () => {
    try {
      this.setIsLoading();
      const userData = await this.api.fetchRequest({
        url: "/user",
        method: "get",
        body: null,
        token: getToken(),
      });
      this.setUserData(userData);
      this.setIsAuth();
      return userData;
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading();
    }
  };
}
