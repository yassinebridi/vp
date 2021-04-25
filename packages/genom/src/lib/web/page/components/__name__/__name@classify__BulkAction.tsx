import { useRemove<%=classify(name)%>Mutation, useUpdate<%=classify(name)%>Mutation } from "@adapters";
import { BulkAction } from "@components";
import { ActionKindType, usePageState } from "@utils";
import React from "react";

export interface <%=classify(name)%>BulkActionProps {}
const <%=classify(name)%>BulkAction: React.FC<<%=classify(name)%>BulkActionProps> = () => {
  const { isTrash } = usePageState();

  const {
    mutateAsync: update<%=classify(name)%>MutateAsync,
    isLoading: isUpdate<%=classify(name)%>Loading,
  } = useUpdate<%=classify(name)%>Mutation();
  const {
    mutateAsync: remove<%=classify(name)%>MutateAsync,
    isLoading: isRemove<%=classify(name)%>Loading,
  } = useRemove<%=classify(name)%>Mutation();

  const isBulkLoading = isTrash ? isRemove<%=classify(name)%>Loading : isUpdate<%=classify(name)%>Loading;

  const handleAsyncRemove = async (
    selectedIds: string[],
    type: ActionKindType
  ): Promise<boolean> => {
    let itemIds: { id: { equals: string } }[] = [];
    selectedIds.map((selectedId) =>
      itemIds.push({ id: { equals: selectedId } })
    );
    if (isTrash && type === "remove") {
      const res = await remove<%=classify(name)%>MutateAsync({ where: { OR: itemIds } });
      if (res.remove<%=classify(name)%>) {
        return true;
      } else {
        return false;
      }
    } else if (isTrash && type === "restore") {
      const res = await update<%=classify(name)%>MutateAsync({
        where: { OR: itemIds },
        data: {
          isTrash: {
            set: false,
          },
        },
      });
      if (res.update<%=classify(name)%>) {
        return true;
      } else {
        return false;
      }
    } else {
      const res = await update<%=classify(name)%>MutateAsync({
        where: { OR: itemIds },
        data: {
          isTrash: {
            set: true,
          },
        },
      });
      if (res.update<%=classify(name)%>) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <BulkAction
      isLoading={isBulkLoading}
      handleAsyncRemove={handleAsyncRemove}
    />
  );
};

export default <%=classify(name)%>BulkAction;
