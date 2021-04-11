import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type MyInputProps = InputProps & {
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: any;
};

const MyInput: FC<MyInputProps> = ({
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
      <Input
        placeholder={placeholder}
        className="inputify"
        {...register(name, { required: true })}
        {...props}
      />
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default MyInput;
