import { makeAutoObservable } from "mobx";
import { getToken, isAuth, setToken } from "../helpers";
import {
  IUserAuthenticationData,
  IUserData,
  IUserRegistrationData,
} from "../types";
import { IAPI } from "../services/API.service";

export interface IUserStore {
  api: IAPI;
  userData: IUserData;
  isAuth: boolean;
  isLoading: boolean;
  setUserData: (userData: IUserData) => void;
  setIsLoading: () => void;
  setIsAuth: () => void;
  userRegistration: (userRegistrationData: IUserRegistrationData) => void;
  userAuthentication: (userAuthenticationData: IUserAuthenticationData) => void;
  setNewUserData: (userData: IUserData) => void;
  getUserData: () => void;
}

interface IUserAuthentication {
  token: string;
}

export class UserStore implements IUserStore {
  api: IAPI;
  userData: IUserData = {
    firstName: "",
    lastName: "",
    email: "",
    id: "",
    avatar: null,
    budgetAmount: "",
  };
  isAuth: boolean = isAuth();
  isLoading: boolean = false;

  constructor(api: IAPI) {
    makeAutoObservable(this);
    this.api = api;
  }

  setUserData = (userData: IUserData) => {
    this.userData = userData;
  };

  setIsLoading = () => {
    this.isLoading = !this.isLoading;
  };

  setIsAuth = () => {
    this.isAuth = isAuth();
  };

  userRegistration = async (userRegistrationData: IUserRegistrationData) => {
    try {
      this.setIsLoading();
      await this.api.fetchRequest({
        url: "/user/register",
        method: "post",
        body: userRegistrationData,
        token: null,
      });
      this.setIsAuth();
    } catch (error: any) {
      return error.response.data.details;
    } finally {
      this.setIsLoading();
    }
  };

  userAuthentication = async (
    userAuthenticationData: IUserAuthenticationData | undefined
  ) => {
    try {
      const { token }: IUserAuthentication = await this.api.fetchRequest({
        url: "/user/login",
        method: "post",
        body: userAuthenticationData,
        token: null,
      });
      setToken(token);
      this.setIsAuth();
    } catch (error: any) {
      return error.response.data.details;
    }
  };

  setNewUserData = async (userData: IUserData) => {
    try {
      this.setIsLoading();
      await this.api.fetchRequest({
        url: "/user",
        method: "patch",
        body: userData,
        token: getToken(),
      });
      await this.getUserData();
      this.setIsAuth();
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading();
    }
  };

  getUserData = async () => {
    try {
      const userData: IUserData = await this.api.fetchRequest({
        url: "/user",
        method: "get",
        body: null,
        token: getToken(),
      });
      this.setUserData(userData);
      return userData;
    } catch (error) {
      console.error(error);
    }
  };
}
