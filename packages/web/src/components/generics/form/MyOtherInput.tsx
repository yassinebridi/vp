import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type MyOtherInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: any;
};

const MyOtherInput: FC<MyOtherInputProps> = ({
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

      <input
        className="px-4 py-2 text-gray-700 bg-gray-200 outline-none rounded-md dark:text-gray-200 dark:bg-gray-900 ringify"
        placeholder={placeholder}
        {...register(name, { required: true })}
        {...props}
      />
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default MyOtherInput;
