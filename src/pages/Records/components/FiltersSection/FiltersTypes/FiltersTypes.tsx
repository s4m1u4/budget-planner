import React, { ChangeEvent, FC } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IFilters } from "../../../types";
import { ICategory } from "../../../../../types";

interface FiltersTypesProps {
  filters: IFilters;
  categories: ICategory[];
  handleChangeType: (event: ChangeEvent<HTMLInputElement> | any) => void;
}

export const FiltersTypes: FC<FiltersTypesProps> = ({
  filters,
  categories,
  handleChangeType,
}) => {
  return (
    <Accordion
      disabled={!Boolean(categories.length)}
      sx={{
        margin: "0",
        boxShadow: "none",
        "&.Mui-expanded": { margin: "0" },
        "&::before": { backgroundColor: "transparent" },
        "&.Mui-disabled": { backgroundColor: "transparent" },
      }}
    >
      <AccordionSummary
        sx={{
          padding: "0",
          "&.Mui-expanded": { minHeight: "48px" },
          ".MuiAccordionSummary-content.Mui-expanded": { margin: "0" },
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>Type</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0" }}>
        <FormControl component="fieldset">
          <RadioGroup value={filters.type}>
            <FormControlLabel
              value="income"
              control={<Radio />}
              label="Income"
              onChange={handleChangeType}
            />
            <FormControlLabel
              value="expense"
              control={<Radio />}
              label="Expense"
              onChange={handleChangeType}
            />
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};
