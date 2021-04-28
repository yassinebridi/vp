import * as yup from "yup";

export const Create<%=singular(classify(name))%>Schema = yup.object().shape({
  name: yup.string().min(2).required(),
});

export const Update<%=singular(classify(name))%>Schema = yup.object().shape({
  name: yup.object().shape({
    set: yup.string().min(2).required(),
  }),
});
