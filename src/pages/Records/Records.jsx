import React, { useCallback, useEffect, useState } from "react";
import { calculateRecords } from "../../helpers";
import { CircularProgress, Container } from "@mui/material";
import { FiltersSection } from "./components/FiltersSection";
import { RecordsSection } from "./components/RecordsSection";

import { Grid, ProgressWrapper, RecordsTitle, Wrapper } from "./Records.styles";

export const Records = ({
  limit,
  histories,
  getHistories,
  getFilteredHistories,
  deleteHistory,
  deleteAllHistories,
  categories,
  getCategories,
}) => {
  const records = calculateRecords(histories, categories);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({ type: "", category: "" });

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    await getCategories();
    await getHistories(1, null);
    setIsLoading(false);
  }, [getCategories, getHistories]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      {isLoading ? (
        <ProgressWrapper>
          <CircularProgress />
        </ProgressWrapper>
      ) : (
        <Wrapper>
          <RecordsTitle>Records page</RecordsTitle>
          <Grid>
            <FiltersSection
              page={page}
              setPage={setPage}
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              getHistories={getHistories}
              getFilteredHistories={getFilteredHistories}
            />
            <RecordsSection
              page={page}
              setPage={setPage}
              limit={limit}
              filters={filters}
              records={records}
              getFilteredHistories={getFilteredHistories}
              deleteHistory={deleteHistory}
              deleteAllHistories={deleteAllHistories}
            />
          </Grid>
        </Wrapper>
      )}
    </Container>
  );
};
