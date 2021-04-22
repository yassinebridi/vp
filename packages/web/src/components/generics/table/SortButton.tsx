import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { useSortStore, useMyParams } from "@utils";
import React from "react";

export interface SortButtonProps {}
const SortButton: React.FC<SortButtonProps> = () => {
  const { sortProps, setSortProps } = useSortStore();
  const [sort] = useMyParams<[object]>([{ query: "sort", type: "object" }]);

  const openSorts = () => {
    setSortProps(!sortProps.open);
  };

  return (
    <button
      onClick={openSorts}
      className="relative flex items-center w-full p-3 text-sm font-medium hover:bg-gray-100 active:bg-gray-200 space-x-2 active:shadow-lg rounded-md dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify"
    >
      <span className="whitespace-nowrap">Sort by</span>
      {sortProps.open ? (
        <ChevronUpIcon className="w-4 h-4" />
      ) : (
        <ChevronDownIcon className="w-4 h-4" />
      )}
      {sort && (
        <span className="absolute top-0 right-0 flex items-center px-1 text-xs font-bold text-white bg-purple-600 rounded-full dark:text-gray-800 dark:bg-gray-300">
          <span>{Object.keys(sort).length}</span>
        </span>
      )}
    </button>
  );
};

export default SortButton;
