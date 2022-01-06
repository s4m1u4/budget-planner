import React, { Component } from "react";
import { IUserData } from "../../types";
import { withRouter } from "../../hocs";
import { ProfileData } from "./components/ProfileData";
import { ProfileForm } from "./components/ProfileForm";
import { CircularProgress, Container } from "@mui/material";

import { Avatar, ProfileTitle, ProgressBox, Wrapper } from "./Profile.styles";

interface IParams {
  editMode: string;
}

interface ProfileProps {
  params: IParams;
  navigate: (path: string | number) => void;
  getUserData: () => object;
  setNewUserData: () => void;
}

interface ProfileState {
  userData: IUserData;
  isLoading: boolean;
}

class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      userData: {
        id: "",
        lastName: "",
        firstName: "",
        avatar: "",
        email: "",
        budgetAmount: "",
      },
      isLoading: false,
    };
  }

  componentDidMount = () => {
    this.setUserData();
  };

  setUserData = async () => {
    this.setState({ isLoading: true });
    const userData: any = await this.props.getUserData();
    this.setState({ userData });
    this.setState({ isLoading: false });
  };

  render() {
    const {
      params: { editMode },
      navigate,
      setNewUserData,
    } = this.props;
    const { userData, isLoading } = this.state;

    return (
      <Container>
        <Wrapper>
          <ProfileTitle>Profile page</ProfileTitle>
          <Avatar />
          {editMode ? (
            isLoading ? (
              <ProgressBox>
                <CircularProgress />
              </ProgressBox>
            ) : (
              <ProfileForm
                navigate={navigate}
                userData={userData}
                setUserData={this.setUserData}
                setNewUserData={setNewUserData}
              />
            )
          ) : isLoading ? (
            <ProgressBox>
              <CircularProgress />
            </ProgressBox>
          ) : (
            <ProfileData navigate={navigate} userData={userData} />
          )}
        </Wrapper>
      </Container>
    );
  }
}

export default withRouter(Profile);
