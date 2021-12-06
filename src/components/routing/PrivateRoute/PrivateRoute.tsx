import React, { FC, Fragment } from "react";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react";
import userStore from "../../../store/UserStore";

const PrivateRoute: FC = observer(({ children }) => {
  return (
    <Fragment>
      {userStore.isAuth ? children : <Navigate to="/login" />}
    </Fragment>
  );
});

export default PrivateRoute;
