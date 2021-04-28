import * as yup from 'yup';

declare const CLOUDINARY_NAME = "videplacard";

declare const LoginSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    email: string;
    password: string;
}>, object>;
declare const RegisterSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
}>, object>;

declare const CreateBrandSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    name: string;
}>, object>;
declare const UpdateBrandSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    name: yup.Shape<object | undefined, {
        set: any;
    }>;
}>, object>;

export { CLOUDINARY_NAME, CreateBrandSchema, LoginSchema, RegisterSchema, UpdateBrandSchema };
