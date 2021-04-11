import {
  LoginInput,
  LoginMutationVariables,
  useLoginMutation,
} from "@adapters";
import { LockIcon } from "@chakra-ui/icons";
import { Button, useToast } from "@chakra-ui/react";
import { MyInput } from "@components";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@vp/common";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export interface LoginFormProps {}
const LoginForm: React.FC<LoginFormProps> = () => {
  const { mutateAsync, isLoading } = useLoginMutation();
  const router = useHistory();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    reValidateMode: "onBlur",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginMutationVariables) => {
    const { email, password } = data;
    try {
      const res = await mutateAsync({
        email,
        password,
      });

      if (res && res.login) {
        router.push("/");
      }
    } catch (error) {
      toast({
        position: "bottom-right",
        title: "Error",
        description: "Email or password is wrong, try again!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm space-y-4">
        <MyInput
          name="email"
          label="Email"
          type="email"
          placeholder="Email adress"
          register={register}
          errors={errors?.email}
        />

        <MyInput
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          register={register}
          errors={errors?.email}
        />
      </div>

      <div>
        <Button
          type="submit"
          isLoading={isLoading}
          colorScheme="blue"
          className="flex items-center font-bold group"
          w="full"
        >
          <LockIcon mr={2} />
          <span>Sign in</span>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
