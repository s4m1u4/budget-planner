import { IUserAuthenticationData } from "../../types";

export interface LoginProps {
  onSubmit: (values: IUserAuthenticationData) => void;
  userAuthentication: (values: IUserAuthenticationData) => void | string;
}
