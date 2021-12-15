import React from "react";
import { ButtonComponent } from "../../../../components/shared";
import { UserData, UserDataMain } from "./ProfileData.styles";

export class ProfileData extends React.Component {
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
