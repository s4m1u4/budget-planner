import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { Dashboard } from "./Dashboard";
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
          deleteCategory,
        },
      },
    }) => ({
      histories,
      getHistories,
      setNewHistory,
      categories,
      getCategories,
      setNewCategory,
      deleteCategory,
    })
  ),
  observer
)(Dashboard);
