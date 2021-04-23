import * as yup from "yup";
export declare const CreateBrandSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    name: string;
}>, object>;
export declare const UpdateBrandSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    name: yup.Shape<object | undefined, {
        set: any;
    }>;
}>, object>;
