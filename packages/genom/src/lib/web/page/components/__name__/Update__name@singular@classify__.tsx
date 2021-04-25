import {
  <%=singular(classify(name))%>UpdateInput,
  Update<%=singular(classify(name))%>MutationVariables,
  use<%=singular(classify(name))%>Query,
  useUpdate<%=singular(classify(name))%>Mutation,
} from "@adapters";
import { useToast } from "@chakra-ui/react";
import { ActionBar, MyOtherInput } from "@components";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePageState } from "@utils";
import { Update<%=singular(classify(name))%>Schema } from "@vp/common";
import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

export interface Update<%=singular(classify(name))%>Props {
  id: string;
  onClose: () => void;
  isOpen: boolean;
}
const Update<%=singular(classify(name))%>: React.FC<Update<%=singular(classify(name))%>Props> = ({ id, onClose, isOpen }) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { component, countComponent } = usePageState();
  const { mutateAsync, isLoading } = useUpdate<%=singular(classify(name))%>Mutation();

  const { data, isLoading: is<%=singular(classify(name))%>Loading } = use<%=singular(classify(name))%>Query(
    { where: { id } },
    { enabled: isOpen }
  );

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Pick<<%=singular(classify(name))%>UpdateInput, "name">>({
    reValidateMode: "onBlur",
    resolver: yupResolver(Update<%=singular(classify(name))%>Schema),
  });

  React.useEffect(() => {
    if (data) {
      setValue("name.set", data.getOne<%=singular(classify(name))%>.name);
    }
  }, [data]);

  const onSubmit = async (data: Update<%=singular(classify(name))%>MutationVariables["data"]) => {
    try {
      const res = await mutateAsync({ where: { id }, data });
      if (res.update<%=singular(classify(name))%>) {
        toast({
          position: "bottom-right",
          title: "The <%=singular(classify(name))%> is created successfully",
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
      headerText="Update <%=singular(classify(name))%>"
      withButton={false}
      isLoading={isLoading}
      onSubmit={handleSubmit(onSubmit)}
      type="update"
    >
      <div className="mb-3">
        <MyOtherInput
          name="name.set"
          label="<%=singular(classify(name))%>'s name"
          placeholder="Name"
          register={register}
          errors={errors?.name}
          isLoading={is<%=singular(classify(name))%>Loading}
        />
      </div>
    </ActionBar>
  );
};

export default Update<%=singular(classify(name))%>;
