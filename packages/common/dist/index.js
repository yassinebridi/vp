"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/utils/constants.ts
var CLOUDINARY_NAME = "videplacard";

// src/schemas/auth.schema.ts



var _yup = require('yup');
var LoginSchema = _yup.object.call(void 0, ).shape({
  email: _yup.string.call(void 0, ).email().required(),
  password: _yup.string.call(void 0, ).min(8).max(30).required()
});
var RegisterSchema = _yup.object.call(void 0, ).shape({
  email: _yup.string.call(void 0, ).email().required(),
  firstName: _yup.string.call(void 0, ).required(),
  lastName: _yup.string.call(void 0, ).required(),
  phoneNumber: _yup.string.call(void 0, ).required(),
  password: _yup.string.call(void 0, ).min(8).max(30).required()
});

// src/schemas/brand.schema.ts




var CreateBrandSchema = _yup.object.call(void 0, ).shape({
  name: _yup.string.call(void 0, ).required()
});
var UpdateBrandSchema = _yup.object.call(void 0, ).shape({
  name: _yup.object.call(void 0, ).shape({
    set: _yup.string.call(void 0, )
  })
});






exports.CLOUDINARY_NAME = CLOUDINARY_NAME; exports.CreateBrandSchema = CreateBrandSchema; exports.LoginSchema = LoginSchema; exports.RegisterSchema = RegisterSchema; exports.UpdateBrandSchema = UpdateBrandSchema;
//# sourceMappingURL=index.js.map
