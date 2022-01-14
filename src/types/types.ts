import { Method } from "axios";

export interface ICategory {
  id: string;
  title: string;
  description: string;
  isDefault: boolean;
}

export interface IHistory {
  id: string;
  type: string;
  amount: string;
  user_id: string;
  category_id: string;
  wish_list_id: string | null;
}

export interface IRecord {
  category?: ICategory;
  id: string;
  type: string;
  amount: string;
  user_id: string;
  category_id: string;
  wish_list_id: string | null;
}

export interface IUserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  budgetAmount: string;
}

export interface IFetchRequestValues {
  url: string;
  method: Method;
  body?: object | null;
  token?: string | null;
  params?: object | null;
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

export interface IAvatarLink {
  avatar: string;
}
