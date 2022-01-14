import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { Header } from "./Header";
import { HeaderProps } from "./types";

export const HeaderContainer = compose<HeaderProps, {}>(
  inject(
    ({
      rootStore: {
        userStore: {
          setIsAuth,
          userData: { firstName, lastName, avatar },
        },
      },
    }) => ({ firstName, lastName, setIsAuth, avatar })
  ),
  observer
)(Header);
