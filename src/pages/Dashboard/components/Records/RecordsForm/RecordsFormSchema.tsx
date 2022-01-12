import * as yup from "yup";

export const RecordsFormSchema = yup.object({
  amount: yup
    .number()
    .min(1)
    .positive("Amount should be a positive")
    .required("Amount is required"),
  type: yup.string().required("Type is required"),
  category: yup.string().required("Category is required"),
});
