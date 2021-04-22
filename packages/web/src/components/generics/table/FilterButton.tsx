import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { useFilterStore, useMyParams } from "@utils";
import React from "react";

export interface FilterButtonProps {}
const FilterButton: React.FC<FilterButtonProps> = () => {
  const { filterProps, setFilterProps } = useFilterStore();
  const [filter] = useMyParams<[object]>([{ query: "filter", type: "object" }]);

  const openFilters = () => {
    setFilterProps(!filterProps.open);
  };

  return (
    <button
      onClick={openFilters}
      className="relative flex items-center w-full p-3 text-sm font-medium hover:bg-gray-100 active:bg-gray-200 space-x-2 active:shadow-lg rounded-md dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify"
    >
      <span>Filters</span>
      {filterProps.open ? (
        <ChevronUpIcon className="w-4 h-4" />
      ) : (
        <ChevronDownIcon className="w-4 h-4" />
      )}
      {filter && (
        <span className="absolute top-0 right-0 flex items-center px-1 text-xs font-bold text-white bg-purple-600 rounded-full dark:text-gray-800 dark:bg-gray-300">
          <span>{Object.keys(filter).length}</span>
        </span>
      )}
    </button>
  );
};

export default FilterButton;
