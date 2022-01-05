import React from "react";
import { Button } from "@mui/material";

import { ButtonGroup } from "./FiltersOptions.styles";

export const FiltersOptions = ({
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
        sx={{ marginTop: "10px" }}
        disabled={!Boolean(filters.type) && !Boolean(filters.category)}
        onClick={handleClickSearch}
      >
        Search
      </Button>
      <Button
        fullWidth
        color="error"
        variant="contained"
        sx={{ marginTop: "10px" }}
        disabled={!Boolean(filters.type) && !Boolean(filters.category)}
        onClick={handleClickResetFilters}
      >
        Reset
      </Button>
    </ButtonGroup>
  );
};
