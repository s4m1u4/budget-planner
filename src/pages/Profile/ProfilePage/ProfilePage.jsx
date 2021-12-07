import React from "react";
import { Container } from "@mui/material";
import { inject, observer } from "mobx-react";

const ProfilePage = inject(
  ({
    rootStore: {
      userStore: { userData },
    },
  }) => ({ userData })
)(
  observer(({ userData }) => {
    return (
      <Container>
        <h1>Profile page</h1>
        {userData.firstName}
      </Container>
    );
  })
);

export default ProfilePage;
