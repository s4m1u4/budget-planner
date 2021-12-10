import { inject, observer } from "mobx-react";
import { Profile } from "../index";

const ProfileContainer = inject(
  ({
    rootStore: {
      userStore: { userData },
    },
  }) => ({ userData })
)(observer(Profile));

export default ProfileContainer;
