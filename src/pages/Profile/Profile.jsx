import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { box } from "./Profile.styles";

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Box sx={box}>
          <Typography variant="h4" component="h1">
            Profile page
          </Typography>
          <p>{this.props.userData.firstName}</p>
          <p>{this.props.userData.lastName}</p>
          <p>{this.props.userData.email}</p>
        </Box>
      </Container>
    );
  }
}

export default Profile;
