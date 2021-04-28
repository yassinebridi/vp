import * as yup from "yup";

export const CreateBrandSchema = yup.object().shape({
  name: yup.string().min(2).required(),
});

export const UpdateBrandSchema = yup.object().shape({
  name: yup.object().shape({
    set: yup.string().min(2),
  }),
});
