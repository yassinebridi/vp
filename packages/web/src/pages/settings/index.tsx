import {
  UpdateUserMutationVariables,
  useMeQuery,
  useUpdateUserMutation,
} from "@adapters";
import { Button, useToast } from "@chakra-ui/react";
import { MyInput } from "@components";
import { useMe } from "@utils";
import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

export interface SettingsPageProps {}
const SettingsPage: React.FC<SettingsPageProps> = () => {
  const { meData } = useMe();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useUpdateUserMutation();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserMutationVariables["updateUserInput"]["data"]>({
    reValidateMode: "onBlur",
  });

  const onSubmit = async (
    data: UpdateUserMutationVariables["updateUserInput"]["data"]
  ) => {
    const { email, avatar, lastName, firstName } = data;

    try {
      const res = await mutateAsync({
        updateUserInput: {
          where: {
            id: meData.me.id,
          },
          data: {
            email,
            avatar,
            lastName,
            firstName,
          },
        },
      });

      if (res && res.updateUser) {
        const meKey = useMeQuery.getKey();
        queryClient.refetchQueries({ queryKey: meKey });
        toast({
          position: "bottom-right",
          title: "Vos changements ont été enregistrés",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        position: "bottom-right",
        title: "Error",
        description: error.error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <div className="flex flex-col max-w-lg mx-auto space-y-8">
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-gray-600">Vos informations: </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col w-full space-y-4">
              <MyInput
                defaultValue={meData.me.firstName}
                register={register}
                errors={errors?.firstName}
                type="text"
                placeholder="Prénom"
                name="firstName.set"
              />
              <MyInput
                defaultValue={meData.me.lastName}
                register={register}
                errors={errors?.lastName}
                type="text"
                placeholder="Nom"
                name="lastName.set"
              />

              <MyInput
                defaultValue={meData.me.email}
                register={register}
                errors={errors?.email}
                type="text"
                placeholder="Email"
                name="email.set"
              />

              <Button
                type="submit"
                colorScheme="blue"
                isLoading={isLoading}
                loadingText="Edition"
              >
                Éditer
              </Button>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="flex flex-col space-y-2"> */}
      {/*   <div className="font-semibold text-gray-600"> */}
      {/*     Changement de mot de passe:{" "} */}
      {/*   </div> */}
      {/*   <div> */}
      {/*     <PassSettings /> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
};

export default SettingsPage;
