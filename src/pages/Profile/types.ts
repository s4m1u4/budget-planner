import { IUserData } from "../../types";
import { IPasswordData } from "../Records/types";

export interface IParams {
  editMode: string;
}

export interface ProfileProps {
  params: IParams;
  navigate: (path: string | number) => void;
  getUserData: () => IUserData;
  setNewUserData: () => void;
  setNewPassword: (passwordData: IPasswordData) => string | null;
}

export interface ProfileState {
  userData: IUserData;
  isLoading: boolean;
}
