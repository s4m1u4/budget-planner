import React, { ChangeEvent, FC } from "react";
import { FiltersOptions } from "./FiltersOptions";
import { FiltersTypes } from "./FiltersTypes";
import { FiltersCategories } from "./FiltersCategories";
import { IFilters } from "../../types";
import { ICategory } from "types";

import {
  Section,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from "../../Records.styles";

interface FiltersSectionProps {
  setPage: (page: number) => void;
  filters: IFilters;
  setFilters: ({ type, category }: IFilters | any) => void;
  categories: ICategory[];
  getHistories: (page?: number | null, limit?: number | null) => void;
  getFilteredHistories: (type: string, category: string, page: number) => void;
}

export const FiltersSection: FC<FiltersSectionProps> = ({
  setPage,
  filters,
  setFilters,
  categories,
  getHistories,
  getFilteredHistories,
}) => {
  const handleClickSearch = async () => {
    await getFilteredHistories(filters.type, filters.category, 1);
    setPage(1);
  };

  const handleClickResetFilters = async () => {
    setFilters({ type: "", category: "" });
    await getHistories();
    setPage(1);
  };

  const handleChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState: IFilters) => ({
      ...prevState,
      type: event.target.value,
    }));
  };

  const handleChangeCategory = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState: IFilters) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Filters</SectionTitle>
      </SectionHeader>
      <SectionFooter>
        <FiltersTypes
          filters={filters}
          categories={categories}
          handleChangeType={handleChangeType}
        />
        <FiltersCategories
          filters={filters}
          categories={categories}
          handleChangeCategory={handleChangeCategory}
        />
        <FiltersOptions
          filters={filters}
          handleClickSearch={handleClickSearch}
          handleClickResetFilters={handleClickResetFilters}
        />
      </SectionFooter>
    </Section>
  );
};
