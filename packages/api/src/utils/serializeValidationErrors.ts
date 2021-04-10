import { ValidationError } from 'yup';

export const serializeValidationErrors = (err: ValidationError) => {
  const invalid: string[] = [];

  err.inner.map((value) => {
    invalid.push(value.message);
  });
  return invalid;
};
