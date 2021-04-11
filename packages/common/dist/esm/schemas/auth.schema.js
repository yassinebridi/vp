import * as yup from 'yup';
export const LoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(30).required(),
});
export const RegisterSchema = yup.object().shape({
    email: yup.string().email().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    password: yup.string().min(8).max(30).required(),
});
//# sourceMappingURL=auth.schema.js.map