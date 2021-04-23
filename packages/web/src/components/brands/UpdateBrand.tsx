import {
  BrandUpdateInput,
  UpdateBrandMutationVariables,
  useBrandQuery,
  useUpdateBrandMutation,
} from "@adapters";
import { useToast } from "@chakra-ui/react";
import { ActionBar, MyOtherInput } from "@components";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePageState } from "@utils";
import { UpdateBrandSchema } from "@vp/common";
import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

export interface UpdateBrandProps {
  id: string;
  onClose: () => void;
  isOpen: boolean;
}
const UpdateBrand: React.FC<UpdateBrandProps> = ({ id, onClose, isOpen }) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { component, countComponent } = usePageState();
  const { mutateAsync, isLoading } = useUpdateBrandMutation();

  const { data, isLoading: isBrandLoading } = useBrandQuery(
    { where: { id } },
    { enabled: isOpen }
  );

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Pick<BrandUpdateInput, "name">>({
    reValidateMode: "onBlur",
    resolver: yupResolver(UpdateBrandSchema),
  });

  React.useEffect(() => {
    if (data) {
      setValue("name.set", data.getOneBrand.name);
    }
  }, [data]);

  const onSubmit = async (data: UpdateBrandMutationVariables["data"]) => {
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
      isOpen={isOpen}
      headerText="Update brand"
      withButton={false}
      isLoading={isLoading}
      onSubmit={handleSubmit(onSubmit)}
      type="update"
    >
      <div className="mb-3">
        <MyOtherInput
          name="name.set"
          label="Brand's name"
          placeholder="Name"
          register={register}
          errors={errors?.name}
          isLoading={isBrandLoading}
        />
      </div>
    </ActionBar>
  );
};

export default UpdateBrand;
