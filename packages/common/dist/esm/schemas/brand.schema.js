import * as yup from "yup";
export const CreateBrandSchema = yup.object().shape({
    name: yup.string().required(),
});
export const UpdateBrandSchema = yup.object().shape({
    name: yup.object().shape({
        set: yup.string(),
    }),
});
//# sourceMappingURL=brand.schema.js.map