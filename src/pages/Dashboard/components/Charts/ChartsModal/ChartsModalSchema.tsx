import * as yup from "yup";

export const ChartsModalSchema = yup.object({
  id: yup.string().required("Category is required"),
});
