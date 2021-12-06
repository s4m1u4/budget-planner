import React from "react";
import { inject } from "mobx-react";
import PrivateRoute from "./PrivateRoute";

const PrivateRouteContainer = inject(({ rootStore: { userStore } }) => ({
  userStore,
}))(PrivateRoute);

export default PrivateRouteContainer;
