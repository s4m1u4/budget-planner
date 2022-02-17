import React, { FC } from "react";
import { Button } from "@mui/material";
import { IFilters } from "../../../types";

import { ButtonGroup } from "./FiltersOptions.styles";

interface FiltersOptionsProps {
  filters: IFilters;
  handleClickSearch: () => void;
  handleClickResetFilters: () => void;
}

export const FiltersOptions: FC<FiltersOptionsProps> = ({
  filters,
  handleClickSearch,
  handleClickResetFilters,
}) => {
  return (
    <ButtonGroup>
      <Button
        fullWidth
        color="success"
        variant="contained"
        sx={{ color: "#fff", marginTop: "10px" }}
        disabled={!Boolean(filters.type) && !Boolean(filters.category)}
        onClick={handleClickSearch}
      >
        Search
      </Button>
      <Button
        fullWidth
        color="error"
        variant="contained"
        sx={{ color: "#fff", marginTop: "10px" }}
        disabled={!Boolean(filters.type) && !Boolean(filters.category)}
        onClick={handleClickResetFilters}
      >
        Reset
      </Button>
    </ButtonGroup>
  );
};
