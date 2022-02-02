import React, { Component } from "react";
import { withRouter } from "../../hocs";
import { EditMode } from "./components";
import {
  Avatar,
  CircularProgress,
  Container,
  IconButton,
  Tooltip,
} from "@mui/material";
import { ProfileProps, ProfileState } from "./types";
import { IUserData } from "../../types";
import { AvatarModal } from "./components/AvatarModal";

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

  componentDidMount = async () => {
    await this.setUserData();
  };

  setUserData = async () => {
    // this.setState({ isLoading: true });
    const userData: IUserData = await this.props.getUserData();
    // this.setState({ userData });
    // this.setState({ isLoading: false });
  };

  render() {
    const {
      params,
      navigate,
      setNewUserData,
      setNewPassword,
      setNewAvatar,
      getUserData,
    } = this.props;
    const { userData, isLoading } = this.state;

    return (
      <Container>
        <Wrapper>
          <ProfileTitle>Profile page</ProfileTitle>
          <AvatarModal
            open={this.state.isOpenModal}
            getUserData={getUserData}
            setNewAvatar={setNewAvatar}
            setUserData={this.setUserData}
            handleClose={this.handleClose}
            onSubmit={(values) => values}
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
            <EditMode
              onSubmit={(values) => values}
              editMode={params.editMode}
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
