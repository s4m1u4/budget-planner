import { IUserRegistrationData } from "../../types";

export interface SignupProps {
  onSubmit: (values: IUserRegistrationData) => void;
  userRegistration: (
    userRegistrationData: IUserRegistrationData
  ) => void | string;
}
