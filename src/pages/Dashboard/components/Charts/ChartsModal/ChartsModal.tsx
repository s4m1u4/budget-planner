import React, { FC } from "react";
import { useFormik } from "formik";
import { ChartsModalSchema } from "./ChartsModalSchema";
import { ModalComponent } from "components/shared";
import { Button, MenuItem, TextField } from "@mui/material";
import { ICategory } from "types";

import { ButtonGroup, Title } from "./ChartsModal.styles";

interface ChartsModalProps {
  open: boolean;
  onSubmit: (values: IValuesData) => void;
  handleClose: () => void;
  categories: ICategory[];
  deleteCategory: (id: string) => void;
}

interface IValuesData {
  id: string;
}

export const ChartsModal: FC<ChartsModalProps> = ({
  open,
  onSubmit,
  handleClose,
  categories,
  deleteCategory,
}) => {
  const handleSubmit = async (values: IValuesData) => {
    formik.resetForm();
    await deleteCategory(values.id);
    await onSubmit(values);
    handleClose();
  };

  const formik = useFormik({
    initialValues: {
      id: "",
    },
    validationSchema: ChartsModalSchema,
    onSubmit: handleSubmit,
  });

  return (
    <ModalComponent open={open} onClose={handleClose}>
      <Title>Delete category</Title>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          select
          fullWidth
          sx={{ marginBottom: "15px" }}
          name="id"
          size="small"
          label="Category"
          value={formik.values.id}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.id && !!formik.errors.id}
          helperText={formik.touched.id && formik.errors.id}
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
            color="error"
            type="submit"
          >
            Delete category
          </Button>
          <Button
            sx={{ color: "#fff" }}
            variant="contained"
            color="primary"
            onClick={handleClose}
          >
            Close
          </Button>
        </ButtonGroup>
      </form>
    </ModalComponent>
  );
};
