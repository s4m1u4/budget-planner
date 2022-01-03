import React from "react";
import { ChartsFormSchema } from "./ChartsFormSchema";
import { useFormik } from "formik";
import { ModalComponent } from "../../../../../components/shared";
import { ButtonGroup, Form, Title } from "./ChartsForm.styles";
import { Button, TextField } from "@mui/material";

export const ChartsForm = ({ open, handleClose, setNewCategory }) => {
  const handleSubmit = async (values) => {
    await setNewCategory(values);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: ChartsFormSchema,
    onSubmit: async (values) => {
      await handleSubmit(values);
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
          <Button variant="contained" color="success" type="submit">
            Add category
          </Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
        </ButtonGroup>
      </Form>
    </ModalComponent>
  );
};
