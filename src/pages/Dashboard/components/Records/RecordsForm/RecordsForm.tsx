import React, { FC } from "react";
import { ModalComponent } from "components/shared";
import { Button, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { RecordsFormSchema } from "./RecordsFormSchema";
import { IHistoryData } from "../../../types";
import { ICategory } from "types";

import { ButtonGroup, Form, Title } from "./RecordsForm.styles";

interface RecordsFormProps {
  open: boolean;
  onSubmit: (values: IHistoryData) => void;
  categories: ICategory[];
  handleClose: () => void;
  setNewHistory: (historyData: IHistoryData) => void;
}

export const RecordsForm: FC<RecordsFormProps> = ({
  open,
  onSubmit,
  categories,
  handleClose,
  setNewHistory,
}) => {
  const handleSubmit = async (values: IHistoryData) => {
    await setNewHistory(values);
    await onSubmit(values);
  };

  const formik = useFormik({
    initialValues: {
      amount: "",
      type: "",
      category: "",
    },
    validationSchema: RecordsFormSchema,
    onSubmit: async (values: IHistoryData) => {
      await handleSubmit(values);
      formik.resetForm();
      handleClose();
    },
  });

  return (
    <ModalComponent open={open} onClose={handleClose}>
      <Title>Create a new record</Title>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name="amount"
          type="number"
          size="small"
          label="Amount"
          value={formik.values.amount}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.amount && !!formik.errors.amount}
          helperText={formik.touched.amount && formik.errors.amount}
        />
        <TextField
          select
          fullWidth
          name="type"
          size="small"
          label="Type"
          value={formik.values.type}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.type && !!formik.errors.type}
          helperText={formik.touched.type && formik.errors.type}
        >
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expense">Expense</MenuItem>
        </TextField>
        <TextField
          select
          fullWidth
          name="category"
          size="small"
          label="Category"
          value={formik.values.category}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.category && !!formik.errors.category}
          helperText={formik.touched.category && formik.errors.category}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.title}
            </MenuItem>
          ))}
        </TextField>
        <ButtonGroup>
          <Button
            sx={{ color: "#fff" }}
            variant="contained"
            color="success"
            type="submit"
          >
            Add record
          </Button>
          <Button
            sx={{ color: "#fff" }}
            variant="contained"
            color="error"
            onClick={handleClose}
          >
            Close
          </Button>
        </ButtonGroup>
      </Form>
    </ModalComponent>
  );
};
