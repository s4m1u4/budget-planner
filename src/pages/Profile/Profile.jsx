import React from "react";
import { CircularProgress, Container } from "@mui/material";
import { Avatar, ProgressBox, Title, Wrapper } from "./Profile.styles";
import { ProfileForm } from "./components/ProfileForm/ProfileForm";
import { withRouter } from "../../hooks";
import { ProfileData } from "./components/ProfileData/ProfileData";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      isLoading: false,
    };
  }

  componentDidMount = () => {
    this.setUserData();
  };

  setUserData = async () => {
    this.setState({ isLoading: true });
    const userData = await this.props.getUserData();
    this.setState({ userData });
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <Title>Profile page</Title>
          <Avatar />
          {this.props.params.editMode ? (
            this.state.isLoading ? (
              <ProgressBox>
                <CircularProgress />
              </ProgressBox>
            ) : (
              <ProfileForm
                navigate={this.props.navigate}
                userData={this.state.userData}
                setUserData={this.setUserData}
                setNewUserData={this.props.setNewUserData}
              />
            )
          ) : this.state.isLoading ? (
            <ProgressBox>
              <CircularProgress />
            </ProgressBox>
          ) : (
            <ProfileData
              navigate={this.props.navigate}
              userData={this.state.userData}
            />
          )}
        </Wrapper>
      </Container>
    );
  }
}

export default withRouter(Profile);
