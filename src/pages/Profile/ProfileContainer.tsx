import Profile from "./Profile";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { ProfileProps } from "./types";

export const ProfileContainer = compose<ProfileProps, {}>(
  inject(
    ({
      rootStore: {
        userStore: {
          getUserData,
          setNewUserData,
          setNewPassword,
          setNewAvatar,
        },
      },
    }) => ({
      getUserData,
      setNewUserData,
      setNewPassword,
      setNewAvatar,
    })
  ),
  observer
)(Profile);
