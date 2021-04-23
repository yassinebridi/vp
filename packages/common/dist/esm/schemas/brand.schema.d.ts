import * as yup from "yup";
export declare const CreateBrandSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    name: string;
}>, object>;
export declare const UpdateBrandSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    where: object & {
        id: any;
    };
    data: yup.Shape<object | undefined, {
        name: any;
    }>;
}>, object>;
