import {
  <%=singular(classify(name))%>CreateInput,
  Create<%=singular(classify(name))%>MutationVariables,
  useCreate<%=singular(classify(name))%>Mutation,
} from "@adapters";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { ActionBar, MyOtherInput } from "@components";
import { PlusIcon } from "@heroicons/react/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePageState } from "@utils";
import { Create<%=singular(classify(name))%>Schema } from "@vp/common";
import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

export interface Create<%=singular(classify(name))%>Props {}
const Create<%=singular(classify(name))%>: React.FC<Create<%=singular(classify(name))%>Props> = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { component, countComponent } = usePageState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutateAsync, isLoading } = useCreate<%=singular(classify(name))%>Mutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Pick<<%=singular(classify(name))%>CreateInput, "name">>({
    reValidateMode: "onBlur",
    resolver: yupResolver(Create<%=singular(classify(name))%>Schema),
  });

  const onSubmit = async (
    create<%=singular(classify(name))%>Input: Create<%=singular(classify(name))%>MutationVariables["create<%=singular(classify(name))%>Input"]
  ) => {
    try {
      const res = await mutateAsync({ create<%=singular(classify(name))%>Input });
      if (res.create<%=singular(classify(name))%>) {
        toast({
          position: "bottom-right",
          title: "The <%=singular(name)%> is created successfully",
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
      headerText="Create a <%=singular(name)%>"
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
          label="<%=singular(classify(name))%>'s name"
          placeholder="Name"
          register={register}
          errors={errors?.name}
        />
      </div>
    </ActionBar>
  );
};

export default Create<%=singular(classify(name))%>;
