import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { SwitchComponentProps } from "./types";
import { SwitchComponent } from "./SwitchComponent";

export const SwitchComponentContainer = compose<SwitchComponentProps, {}>(
  inject(
    ({
      rootStore: {
        userStore: { theme, setTheme },
      },
    }) => ({ theme, setTheme })
  ),
  observer
)(SwitchComponent);
