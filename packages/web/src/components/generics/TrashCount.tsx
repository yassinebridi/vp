import { useCountBrandsQuery } from "@adapters";
import { usePageState } from "@utils";
import React from "react";

export interface TrashCountProps {}
const TrashCount: React.FC<TrashCountProps> = () => {
  const { component } = usePageState();
  const { data, isLoading } = useCountBrandsQuery(
    {
      where: { isTrash: { equals: true } },
    },
    {
      enabled: component === "brands",
    }
  );

  if (isLoading) return null;
  return (
    <span className="absolute flex items-center px-1 text-xs font-bold text-white bg-red-500 rounded-full -right-1 -top-1">
      {data.countBrands}
    </span>
  );
};

export default TrashCount;
