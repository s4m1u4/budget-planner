import { Header } from "../index";
import { inject, observer } from "mobx-react";

const HeaderContainer = inject(
  ({
    rootStore: {
      userStore: { userData, setIsAuth },
    },
  }) => ({ userData, setIsAuth })
)(observer(Header));

export default HeaderContainer;
