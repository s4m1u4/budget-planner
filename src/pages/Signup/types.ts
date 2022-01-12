import { IUserRegistrationData } from "../../types";

export interface SignupProps {
  userRegistration: (
    userRegistrationData: IUserRegistrationData
  ) => void | string;
}
