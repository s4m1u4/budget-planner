import React, { Component } from "react";
import { withRouter } from "../../hocs";
import { ProfileForm } from "./components";
import {
  Avatar,
  CircularProgress,
  Container,
  IconButton,
  Tooltip,
} from "@mui/material";
import { ProfileProps, ProfileState } from "./types";
import { IUserData } from "../../types";
import { ProfileModalAvatar } from "./components/ProfileModalAvatar";

import { ProfileTitle, ProgressBox, Wrapper } from "./Profile.styles";

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
      isOpenModal: false,
    };
  }

  handleOpen = () => this.setState({ isOpenModal: true });
  handleClose = () => this.setState({ isOpenModal: false });

  componentDidMount = () => {
    this.setUserData();
  };

  setUserData = async () => {
    this.setState({ isLoading: true });
    const userData: IUserData = await this.props.getUserData();
    this.setState({ userData });
    this.setState({ isLoading: false });
  };

  render() {
    const {
      params: { editMode },
      navigate,
      setNewUserData,
      setNewPassword,
    } = this.props;
    const { userData, isLoading } = this.state;

    return (
      <Container>
        <Wrapper>
          <ProfileTitle>Profile page</ProfileTitle>
          <ProfileModalAvatar
            open={this.state.isOpenModal}
            setUserData={this.setUserData}
            handleClose={this.handleClose}
            getUserData={this.props.getUserData}
            setNewAvatar={this.props.setNewAvatar}
          />
          <Tooltip title="Change avatar" arrow placement="right-end">
            <IconButton
              onClick={this.handleOpen}
              sx={{ padding: "0", marginBottom: "15px" }}
            >
              <Avatar
                sx={{
                  width: "200px",
                  height: "200px",
                }}
                alt={`${userData.firstName && userData.firstName} ${
                  userData.lastName && userData.lastName
                }`}
                src={userData.avatar}
              />
            </IconButton>
          </Tooltip>
          {isLoading ? (
            <ProgressBox>
              <CircularProgress />
            </ProgressBox>
          ) : (
            <ProfileForm
              editMode={editMode}
              navigate={navigate}
              userData={userData}
              setUserData={this.setUserData}
              setNewUserData={setNewUserData}
              setNewPassword={setNewPassword}
            />
          )}
        </Wrapper>
      </Container>
    );
  }
}

export default withRouter(Profile);
