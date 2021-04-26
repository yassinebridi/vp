import { useCountBrandsQuery } from "@adapters";
import { usePageState } from "@utils";
import React from "react";

export interface TrashCountProps {}
const TrashCount: React.FC<TrashCountProps> = () => {
  const { component } = usePageState();

  const { data: brandsData, isLoading: brandsIsLoading } = useCountBrandsQuery(
    {
      where: { isTrash: { equals: true } },
    },
    {
      enabled: component === "brands",
    }
  );

  //These data arrays are much cleaner, and easier for the genom package(local package) to inject new code
  const isLoadingArr = [
    {
      name: "brands",
      loading: brandsIsLoading,
    },
  ];

  if (isLoadingArr.find((arr) => arr.name === component).loading) return null;

  const dataArr = [
    {
      name: "brands",
      count: brandsData.countBrands,
    },
  ];
  return (
    <span className="absolute flex items-center px-1 text-xs font-bold text-white bg-red-500 rounded-full -right-1 -top-1">
      {dataArr.find((item) => item.name === component).count}
    </span>
  );
};

export default TrashCount;
