import {
  BrandUpdateInput,
  UpdateBrandMutationVariables,
  useUpdateBrandMutation,
} from "@adapters";
import { useToast } from "@chakra-ui/react";
import { ActionBar, MyOtherInput } from "@components";
import { PlusIcon } from "@heroicons/react/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePageState } from "@utils";
import { UpdateBrandSchema } from "@vp/common";
import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

export interface UpdateBrandProps {
  id: string;
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}
const UpdateBrand: React.FC<UpdateBrandProps> = ({
  id,
  onClose,
  onOpen,
  isOpen,
}) => {
  const { component, countComponent } = usePageState();
  const { mutateAsync, isLoading } = useUpdateBrandMutation();
  const queryClient = useQueryClient();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Pick<BrandUpdateInput, "name">>({
    reValidateMode: "onBlur",
    resolver: yupResolver(UpdateBrandSchema),
    defaultValues: {
      name: { set: "okok" },
    },
  });
  console.log("errors: ", errors);

  const onSubmit = async (data: UpdateBrandMutationVariables["data"]) => {
    console.log("data: ", data);
    console.log("data: ");
    try {
      const res = await mutateAsync({ where: { id }, data });
      if (res.updateBrand) {
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
      onClose={onClose}
      onOpen={onOpen}
      isOpen={isOpen}
      headerText="Update brand"
      isLoading={isLoading}
      onSubmit={handleSubmit(onSubmit)}
      icon={<PlusIcon className="w-10 h-10 p-2" />}
      buttonText={null}
      buttonClasses="text-white bg-purple-500 rounded-full hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    >
      <div className="mb-3">
        <MyOtherInput
          name="name.set"
          label="Brand's name"
          placeholder="Name"
          register={register}
          errors={errors?.name}
        />
      </div>
    </ActionBar>
  );
};

export default UpdateBrand;
