import React, { Component } from "react";
import { IUserData } from "../../../../types";
import { ButtonComponent } from "../../../../components/shared";

import { UserData, UserDataMain } from "./ProfileData.styles";

interface ProfileDataProps {
  navigate: (path: string | number) => void;
  userData: IUserData;
}

export class ProfileData extends Component<ProfileDataProps> {
  handleClick = () => {
    this.props.navigate("edit");
  };

  render() {
    const { firstName, lastName, email } = this.props.userData;

    return (
      <div>
        <UserData>
          First name: <UserDataMain>{firstName}</UserDataMain>
        </UserData>
        <UserData>
          Last name: <UserDataMain>{lastName}</UserDataMain>
        </UserData>
        <UserData>
          Email: <UserDataMain>{email}</UserDataMain>
        </UserData>
        <ButtonComponent
          type="submit"
          color="primary"
          onClick={this.handleClick}
        >
          Edit
        </ButtonComponent>
      </div>
    );
  }
}
