import React, { FC } from "react";
import { useFormik } from "formik";
import { ChartsFormSchema } from "./ChartsFormSchema";
import { ModalComponent } from "../../../../../components/shared";
import { Button, TextField } from "@mui/material";
import { ICategoryData } from "../../../types";

import { ButtonGroup, Form, Title } from "./ChartsForm.styles";

interface ChartsFormProps {
  open: boolean;
  onSubmit: (values: ICategoryData) => void;
  handleClose: () => void;
  setNewCategory: (categoryData: ICategoryData) => void;
}

export const ChartsForm: FC<ChartsFormProps> = ({
  open,
  onSubmit,
  handleClose,
  setNewCategory,
}) => {
  const handleSubmit = async (values: ICategoryData) => {
    await setNewCategory(values);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: ChartsFormSchema,
    onSubmit: async (values: ICategoryData) => {
      await handleSubmit(values);
      await onSubmit(values);
      formik.resetForm();
      handleClose();
    },
  });

  return (
    <ModalComponent open={open} onClose={handleClose}>
      <Title>Create a new category</Title>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name="title"
          size="small"
          label="Title"
          value={formik.values.title}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.title && !!formik.errors.title}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          name="description"
          size="small"
          label="Description"
          value={formik.values.description}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.description && !!formik.errors.description}
          helperText={formik.touched.description && formik.errors.description}
        />
        <ButtonGroup>
          <Button
            sx={{ color: "#fff" }}
            variant="contained"
            color="success"
            type="submit"
          >
            Add category
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
