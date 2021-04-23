import * as yup from "yup";
export const CreateBrandSchema = yup.object().shape({
    name: yup.string().required(),
});
export const UpdateBrandSchema = yup.object().shape({
    where: yup
        .object()
        .shape({
        id: yup.string().required(),
    })
        .required(),
    data: yup.object().shape({
        name: yup.string(),
    }),
});
//# sourceMappingURL=brand.schema.js.map