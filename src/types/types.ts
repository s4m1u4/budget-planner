import { Method } from "axios";

export interface IUserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string | null;
  budgetAmount: string;
}

export interface IHistory {
  id: string;
  amount: string;
  type: string;
  user_id: string;
  category_id: string;
  wish_list_id: string | null;
}

export interface ICategory {
  id: string;
  title: string;
  description: string;
  isDefault: boolean;
}

export interface IFetchRequestValues {
  url: string;
  method: Method;
  body?: object | null;
  token?: string | null;
  params?: object | null;
}

export interface IAPI {
  fetchRequest: (values: IFetchRequestValues) => any;
}

export interface IUserRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUserAuthenticationData {
  email: string;
  password: string;
}

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
