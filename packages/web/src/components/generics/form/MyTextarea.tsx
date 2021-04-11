import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type MyTextareaProps = TextareaProps & {
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: any;
};
const MyTextarea: FC<MyTextareaProps> = ({
  name,
  errors,
  label,
  placeholder,
  register,
  ...props
}) => {
  return (
    <FormControl isInvalid={errors}>
      {label && (
        <FormLabel
          htmlFor={name}
          mb={2}
          fontSize="sm"
          className="text-gray-600 dark:text-gray-300"
        >
          {label}
        </FormLabel>
      )}

      <Textarea
        placeholder={placeholder}
        className="ringify"
        {...register(name, { required: true })}
        {...props}
      />
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default MyTextarea;
