import {
  BrandCreateInput,
  CreateBrandMutationVariables,
  useCreateBrandMutation,
} from "@adapters";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { ActionBar, MyOtherInput } from "@components";
import { PlusIcon } from "@heroicons/react/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePageState } from "@utils";
import { CreateBrandSchema } from "@vp/common";
import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

export interface CreateBrandProps {}
const CreateBrand: React.FC<CreateBrandProps> = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { component, countComponent } = usePageState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutateAsync, isLoading } = useCreateBrandMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Pick<BrandCreateInput, "name">>({
    reValidateMode: "onBlur",
    resolver: yupResolver(CreateBrandSchema),
  });

  const onSubmit = async (
    createBrandInput: CreateBrandMutationVariables["createBrandInput"]
  ) => {
    try {
      const res = await mutateAsync({ createBrandInput });
      if (res.createBrand) {
        toast({
          position: "bottom-right",
          title: "The brand is created successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      queryClient.resetQueries({ queryKey: [component] });
      queryClient.resetQueries({ queryKey: [countComponent] });
      onClose();
      reset();
    } catch (error) {
      toast({
        position: "bottom-right",
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <ActionBar
      withButton={true}
      onClose={onClose}
      onOpen={onOpen}
      isOpen={isOpen}
      headerText="Create a brand"
      isLoading={isLoading}
      onSubmit={handleSubmit(onSubmit)}
      icon={<PlusIcon className="w-10 h-10 p-2" />}
      buttonText={null}
      type="create"
      buttonClasses="text-white bg-purple-500 rounded-full hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    >
      <div className="mb-3">
        <MyOtherInput
          name="name"
          label="Brand's name"
          placeholder="Name"
          register={register}
          errors={errors?.name}
        />
      </div>
    </ActionBar>
  );
};

export default CreateBrand;
