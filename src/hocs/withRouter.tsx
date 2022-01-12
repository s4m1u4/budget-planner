import React, { ComponentClass } from "react";
import {
  Params,
  useParams,
  useNavigate,
  NavigateFunction,
} from "react-router-dom";

interface WithRouterProps {
  getUserData?: () => object;
  setNewUserData?: () => void;
}

export const withRouter =
  (WrappedComponent: ComponentClass<any, any>) => (props: WithRouterProps) => {
    const params: Params = useParams();
    const navigate: NavigateFunction = useNavigate();

    return <WrappedComponent params={params} navigate={navigate} {...props} />;
  };
