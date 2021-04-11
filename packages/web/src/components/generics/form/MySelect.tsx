import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  SelectProps,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

export type OptionType = {
  value: string;
  label: string;
  selected: boolean;
};
type MySelectProps = SelectProps & {
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  options: OptionType[];
  errors: any;
};

const MySelect: FC<MySelectProps> = ({
  name,
  options,
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
      <Select
        {...register(name, { required: true })}
        placeholder={placeholder}
        className="ringify"
        {...props}
      >
        {options.map((opt) => {
          return (
            <option value={opt.value} selected={opt.selected}>
              {opt.label}
            </option>
          );
        })}
      </Select>
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default MySelect;
