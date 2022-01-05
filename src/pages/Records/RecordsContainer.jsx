import { Records } from "./Records";
import { inject, observer } from "mobx-react";

export const RecordsContainer = inject(
  ({
    rootStore: {
      dashboardStore: {
        limit,
        histories,
        getHistories,
        getFilteredHistories,
        deleteHistory,
        deleteAllHistories,
        categories,
        getCategories,
      },
    },
  }) => ({
    limit,
    histories,
    getHistories,
    getFilteredHistories,
    deleteAllHistories,
    deleteHistory,
    categories,
    getCategories,
  })
)(observer(Records));
