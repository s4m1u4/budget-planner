import { Dashboard } from "./Dashboard";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { DashboardProps } from "./types";

export const DashboardContainer = compose<DashboardProps, {}>(
  inject(
    ({
      rootStore: {
        dashboardStore: {
          histories,
          getHistories,
          setNewHistory,
          categories,
          getCategories,
          setNewCategory,
        },
      },
    }) => ({
      histories,
      getHistories,
      setNewHistory,
      categories,
      getCategories,
      setNewCategory,
    })
  ),
  observer
)(Dashboard);
