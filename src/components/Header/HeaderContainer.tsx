import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { HeaderProps } from "./types";
import { Header } from "./Header";

export const HeaderContainer = compose<HeaderProps, {}>(
  inject(
    ({
      rootStore: {
        userStore: {
          setTheme,
          setIsAuth,
          userData: { firstName, lastName, avatar },
        },
      },
    }) => ({ setTheme, firstName, lastName, setIsAuth, avatar })
  ),
  observer
)(Header);
