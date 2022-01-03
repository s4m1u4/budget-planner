import { Dashboard } from "./Dashboard";
import { inject, observer } from "mobx-react";

export const DashboardContainer = inject(
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
)(observer(Dashboard));
