import { Records } from "./Records";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { RecordsProps } from "./types";

export const RecordsContainer = compose<RecordsProps, {}>(
  inject(
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
  ),
  observer
)(Records);
