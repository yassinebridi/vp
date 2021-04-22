import { useBrandsQuery } from "@adapters";
import {
  BrandsTable,
  BulkAction,
  PageHeader,
  TableFilters,
  TableSearch,
  TableSettingsDropdown,
} from "@components";
import { SpinnerIcon } from "@design-system";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import { getQueryParams, paginate, useFilterStore } from "@utils";
import React from "react";
import { useLocation } from "react-router";

export interface BrandsPageProps {}
const BrandsPage: React.FC<BrandsPageProps> = () => {
  const { search } = useLocation();
  const { filterProps, setFilterProps } = useFilterStore();
  const params = getQueryParams(search) as any;
  const searchTerm = params.search;
  const filter = params.filter;
  const pageNo = +params.pageNo || 1;
  const pageSize = +params.pageSize || 25;

  const skip = (pageNo - 1) * pageSize;
  const take = pageSize;

  const { data: brandsData, isLoading } = useBrandsQuery({
    take,
    skip,
    where: {
      name: {
        contains: searchTerm
          ? searchTerm
          : filter
          ? filter.name.contains
          : undefined,
        equals: filter ? filter.name.is : undefined,
        not: { equals: filter ? filter.name.isNot : undefined },
      },
    },
  });
  const openFilters = () => {
    setFilterProps(!filterProps.open);
  };

  const pagintation =
    !isLoading &&
    paginate(brandsData.getAllBrands.totalPages, pageNo, pageSize, 100);

  return (
    <div className="px-6 py-6">
      <PageHeader component="brands" />
      <div className="mt-6">
        <div className="flex justify-between min-w-full px-6 text-gray-600 dark:text-gray-400">
          <TableSearch />

          <div className="flex items-center justify-between space-x-3">
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

            <TableSettingsDropdown />
          </div>
        </div>

        {filterProps.open && (
          <div className="my-2">
            <TableFilters />
          </div>
        )}

        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-44">
            <SpinnerIcon cn="w-8 h-8" />
          </div>
        ) : brandsData.getAllBrands.totalPages === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-600 h-44 dark:text-gray-300">
            No items at the moment
          </div>
        ) : (
          <BrandsTable brands={brandsData} />
        )}

        <div className="flex items-center justify-between min-w-full px-6 my-3 mt-6 text-sm space-x-6 dark:text-gray-300">
          {isLoading ? (
            <span>loading..</span>
          ) : (
            <span>
              {pagintation.startIndex} <span className="text-gray-400">-</span>{" "}
              {pagintation.endIndex} <span className="text-gray-400">of</span>{" "}
              {pagintation.totalItems}
            </span>
          )}
          <div className="flex items-center space-x-4">
            {isLoading ? (
              <span>loading..</span>
            ) : (
              <span>
                {pagintation.currentPage} of {pagintation.totalPages}
              </span>
            )}
            <ArrowRightIcon className="w-5 h-5" />
          </div>
        </div>
        <BulkAction />
      </div>
    </div>
  );
};

export default BrandsPage;
