import React, { FC, useCallback, useEffect, useState } from "react";
import { calculateRecords } from "helpers";
import { CircularProgress, Container } from "@mui/material";
import { FiltersSection } from "./components/FiltersSection";
import { RecordsSection } from "./components/RecordsSection";
import { OverviewSection } from "./components/OverviewSection";
import { IFilters, RecordsProps } from "./types";
import { IRecord } from "types";
import { useDrop } from "react-dnd";

import {
  Grid,
  GridItem,
  ProgressWrapper,
  RecordsTitle,
  Wrapper,
} from "./Records.styles";

export const Records: FC<RecordsProps> = ({
  limit,
  histories,
  getHistories,
  getFilteredHistories,
  deleteHistory,
  deleteAllHistories,
  categories,
  getCategories,
}) => {
  const records: IRecord[] = calculateRecords(histories, categories);

  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<IFilters>({ type: "", category: "" });
  const [selectedRecords, setSelectedRecords] = useState<IRecord[]>([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    await getCategories();
    await getHistories(1, null);
    setIsLoading(false);
  }, [getCategories, getHistories]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "record",
    drop: (item: IRecord) =>
      setSelectedRecords((prevState: IRecord[]) =>
        prevState.find((record: IRecord) => record.id === item.id)
          ? prevState
          : [...prevState, item]
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

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
            <GridItem>
              <FiltersSection
                setPage={setPage}
                filters={filters}
                setFilters={setFilters}
                categories={categories}
                getHistories={getHistories}
                getFilteredHistories={getFilteredHistories}
              />
              <OverviewSection
                isOver={isOver}
                dropRef={dropRef}
                selectedRecords={selectedRecords}
                setSelectedRecords={setSelectedRecords}
              />
            </GridItem>
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
