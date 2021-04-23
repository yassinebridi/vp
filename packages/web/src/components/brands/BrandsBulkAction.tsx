import { useUpdateBrandsMutation, useRemoveBrandsMutation } from "@adapters";
import { BulkAction } from "@components";
import { ActionKindType } from "@components/generics/table/ColumnActions";
import { usePageState } from "@utils";
import React from "react";

export interface BrandsBulkActionProps {}
const BrandsBulkAction: React.FC<BrandsBulkActionProps> = () => {
  const { isTrash } = usePageState();

  const {
    mutateAsync: updateBrandsMutateAsync,
    isLoading: isUpdateBrandsLoading,
  } = useUpdateBrandsMutation();
  const {
    mutateAsync: removeBrandsMutateAsync,
    isLoading: isRemoveBrandsLoading,
  } = useRemoveBrandsMutation();

  const isBulkLoading = isTrash ? isRemoveBrandsLoading : isUpdateBrandsLoading;

  const handleAsyncRemove = async (
    selectedIds: string[],
    type: ActionKindType
  ): Promise<boolean> => {
    let itemIds: { id: { equals: string } }[] = [];
    selectedIds.map((selectedId) =>
      itemIds.push({ id: { equals: selectedId } })
    );
    if (isTrash && type === "remove") {
      const res = await removeBrandsMutateAsync({ where: { AND: itemIds } });
      if (res.removeBrands) {
        return true;
      } else {
        return false;
      }
    } else if (isTrash && type === "restore") {
      const res = await updateBrandsMutateAsync({
        where: { AND: itemIds },
        data: {
          isTrash: {
            set: false,
          },
        },
      });
      if (res.updateBrands) {
        return true;
      } else {
        return false;
      }
    } else {
      const res = await updateBrandsMutateAsync({
        where: { AND: itemIds },
        data: {
          isTrash: {
            set: true,
          },
        },
      });
      if (res.updateBrands) {
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

export default BrandsBulkAction;
