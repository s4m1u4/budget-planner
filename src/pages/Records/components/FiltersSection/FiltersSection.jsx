import React from "react";
import { FiltersOptions } from "./FiltersOptions";
import { FiltersTypes } from "./FiltersTypes";
import { FiltersCategories } from "./FiltersCategories";

import {
  Section,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from "../../Records.styles";

export const FiltersSection = ({
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
  };

  const handleChangeType = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      type: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
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
