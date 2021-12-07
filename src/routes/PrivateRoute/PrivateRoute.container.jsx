import { inject, observer } from "mobx-react";
import PrivateRoute from "./PrivateRoute";

const PrivateRouteContainer = inject(
  ({
    rootStore: {
      userStore: { isAuth },
    },
  }) => ({ isAuth })
)(observer(PrivateRoute));

export default PrivateRouteContainer;
