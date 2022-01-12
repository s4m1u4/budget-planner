import { IUserData } from "../../types";

export interface IParams {
  editMode: string;
}

export interface ProfileProps {
  params: IParams;
  navigate: (path: string | number) => void;
  getUserData: () => IUserData;
  setNewUserData: () => void;
}

export interface ProfileState {
  userData: IUserData;
  isLoading: boolean;
}
