import { Header } from "./Header";
import { inject, observer } from "mobx-react";

export const HeaderContainer = inject(
  ({
    rootStore: {
      userStore: {
        setIsAuth,
        userData: { firstName, lastName },
      },
    },
  }) => ({ firstName, lastName, setIsAuth })
)(observer(Header));
