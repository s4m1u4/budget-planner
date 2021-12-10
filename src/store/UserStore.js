import { makeAutoObservable } from "mobx";
import { getToken, isAuth, setToken } from "../helpers";

export default class UserStore {
  userData = {};
  isAuth = isAuth();

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

  userAuthentication = async (userDataset) => {
    try {
      const { user, token } = await this.api.fetchRequest({
        url: "/user/login",
        method: "post",
        body: userDataset,
        token: null,
      });
      setToken(token);
      await this.getUserData();
      this.setIsAuth();
      return { user };
    } catch (error) {
      console.error(error.response.data.details);
    }
  };

  userRegistration = async (userDataset) => {
    try {
      const user = await this.api.fetchRequest({
        url: "/user/register",
        method: "post",
        body: userDataset,
        token: null,
      });
      this.setIsAuth();
      return user;
    } catch (error) {
      console.error(error.response.data.details);
    }
  };

  getUserData = async () => {
    try {
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
      console.error(error.response.data.details);
    }
  };
}
