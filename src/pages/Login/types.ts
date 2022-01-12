import { IUserAuthenticationData } from "../../types";

export interface LoginProps {
  userAuthentication: (values: IUserAuthenticationData) => void | string;
}
