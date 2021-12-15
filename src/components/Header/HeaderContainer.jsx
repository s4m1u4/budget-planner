import { Header } from "./Header";
import { inject, observer } from "mobx-react";

export const HeaderContainer = inject(
  ({
    rootStore: {
      userStore: { userData, setIsAuth },
    },
  }) => ({ userData, setIsAuth })
)(observer(Header));
