import React, { useCallback, useEffect, useState } from "react";
import { calculateRecords } from "../../helpers";
import { Charts, Overview, Records } from "./components";
import { CircularProgress, Container } from "@mui/material";

import {
  Grid,
  Wrapper,
  DashboardTitle,
  ProgressWrapper,
} from "./Dashboard.styles";

export const Dashboard = ({
  histories,
  getHistories,
  setNewHistory,
  categories,
  getCategories,
  setNewCategory,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    await getCategories();
    await getHistories(null, 10000);
    setIsLoading(false);
  }, [getCategories, getHistories]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const records = calculateRecords(histories, categories);

  const lastRecords = records.slice(-5);

  return (
    <Container>
      {isLoading ? (
        <ProgressWrapper>
          <CircularProgress />
        </ProgressWrapper>
      ) : (
        <Wrapper>
          <DashboardTitle>Dashboard page</DashboardTitle>
          <Grid>
            <Overview records={records} />
            <Records
              histories={histories}
              categories={categories}
              lastRecords={lastRecords}
              setNewHistory={setNewHistory}
            />
            <Charts
              records={records}
              histories={histories}
              categories={categories}
              setNewCategory={setNewCategory}
            />
          </Grid>
        </Wrapper>
      )}
    </Container>
  );
};
