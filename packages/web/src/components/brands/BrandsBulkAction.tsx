import { useRemoveBrandsMutation, useUpdateBrandsMutation } from "@adapters";
import { BulkAction } from "@components";
import { ActionKindType, usePageState } from "@utils";
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

  // TODO: Fix not removing more than two records
  const handleAsyncRemove = async (
    selectedIds: string[],
    type: ActionKindType
  ): Promise<boolean> => {
    let itemIds: { id: { equals: string } }[] = [];
    selectedIds.map((selectedId) =>
      itemIds.push({ id: { equals: selectedId } })
    );
    if (isTrash && type === "remove") {
      const res = await removeBrandsMutateAsync({ where: { OR: itemIds } });
      if (res.removeBrands) {
        return true;
      } else {
        return false;
      }
    } else if (isTrash && type === "restore") {
      const res = await updateBrandsMutateAsync({
        where: { OR: itemIds },
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
        where: { OR: itemIds },
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
