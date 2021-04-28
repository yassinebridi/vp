// src/utils/constants.ts
var CLOUDINARY_NAME = "videplacard";

// src/schemas/auth.schema.ts
import {
  object,
  string
} from "yup";
var LoginSchema = object().shape({
  email: string().email().required(),
  password: string().min(8).max(30).required()
});
var RegisterSchema = object().shape({
  email: string().email().required(),
  firstName: string().required(),
  lastName: string().required(),
  phoneNumber: string().required(),
  password: string().min(8).max(30).required()
});

// src/schemas/brand.schema.ts
import {
  object as object2,
  string as string2
} from "yup";
var CreateBrandSchema = object2().shape({
  name: string2().required()
});
var UpdateBrandSchema = object2().shape({
  name: object2().shape({
    set: string2()
  })
});
export {
  CLOUDINARY_NAME,
  CreateBrandSchema,
  LoginSchema,
  RegisterSchema,
  UpdateBrandSchema
};
//# sourceMappingURL=index.js.map
