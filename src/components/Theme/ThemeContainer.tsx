import { Theme } from "./Theme";
import { compose } from "recompose";
import { ThemeProps } from "./types";
import { inject, observer } from "mobx-react";

export const ThemeContainer = compose<ThemeProps, {}>(
  inject(
    ({
      rootStore: {
        userStore: { theme },
      },
    }) => ({ theme })
  ),
  observer
)(Theme);
