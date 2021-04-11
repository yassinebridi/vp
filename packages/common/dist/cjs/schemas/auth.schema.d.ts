import * as yup from 'yup';
export declare const LoginSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    email: string;
    password: string;
}>, object>;
export declare const RegisterSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
}>, object>;
