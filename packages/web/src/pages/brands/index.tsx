import { useBrandsQuery } from "@adapters";
import {
  BrandsTable,
  PageHeader,
  TableSearch,
  TableSettingsDropdown,
} from "@components";
import { SpinnerIcon } from "@design-system";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useQueryParams } from "@utils";
import React from "react";

export interface BrandsPageProps {}
const BrandsPage: React.FC<BrandsPageProps> = () => {
  const query = useQueryParams();
  const searchTerm = query.get("search");

  const { data: brandsData, isLoading } = useBrandsQuery({
    where: { name: { contains: searchTerm ? searchTerm : undefined } },
  });

  return (
    <div className="px-6 py-6">
      <PageHeader component="brands" />
      <div className="mt-6">
        <div className="flex justify-between min-w-full px-6 my-3 text-gray-600 dark:text-gray-400">
          <TableSearch />

          <div className="flex items-center justify-between space-x-6">
            <button className="flex items-center space-x-2">
              <span>Filters</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            <TableSettingsDropdown />
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-44 ">
            <SpinnerIcon cn="w-9 h-8" />
          </div>
        ) : brandsData.getAllBrands.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-600 h-44 dark:text-gray-300">
            No items at the moment
          </div>
        ) : (
          <BrandsTable brands={brandsData} />
        )}

        <div className="flex items-center justify-between min-w-full px-6 my-3 mt-6 text-sm space-x-6 dark:text-gray-300">
          <span>1 - 25 of 1,042</span>
          <div className="flex items-center space-x-4">
            <span>1 of 41</span>
            <ArrowRightIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
