import { BrandsQueryVariables, useBrandsQuery } from "@adapters";
import {
  BrandsTable,
  BulkAction,
  FilterButton,
  PageHeader,
  Pagination,
  TableFilters,
  TableSearch,
  TableSettingsDropdown,
} from "@components";
import { SpinnerIcon } from "@design-system";
import { paginate, useFilterStore, useMyParams } from "@utils";
import React from "react";

export interface BrandsPageProps {}
const BrandsPage: React.FC<BrandsPageProps> = () => {
  const { filterProps } = useFilterStore();

  const [searchTerm, filter, pageNoQuery, pageSizeQuery] = useMyParams<
    [string, any, number, number]
  >([
    { query: "search", type: "string" },
    { query: "filter", type: "object" },
    { query: "pageNo", type: "number" },
    { query: "pageSize", type: "number" },
  ]);

  const pageNo = pageNoQuery || 1;
  const pageSize = pageSizeQuery || 20;
  const skip = (pageNo - 1) * pageSize;
  const take = pageSize;

  const brandsVariables: BrandsQueryVariables = {
    take,
    skip,
    where: {
      name:
        searchTerm || filter
          ? {
              contains: searchTerm
                ? searchTerm
                : filter?.name?.contains
                ? filter.name.contains
                : undefined,
              equals: filter?.name?.is ? filter.name.is : undefined,
              not: filter?.name?.isNot
                ? { equals: filter.name.isNot }
                : undefined,
            }
          : undefined,
    },
  };
  const { data: brandsData, isLoading } = useBrandsQuery(brandsVariables);

  const paginator =
    !isLoading &&
    paginate(brandsData.getAllBrands.totalPages, pageNo, pageSize, 100);

  return (
    <div className="px-6 py-6">
      <PageHeader component="brands" />
      <div className="mt-6">
        <div className="flex justify-between min-w-full px-6 text-gray-600 dark:text-gray-400">
          <TableSearch />

          <div className="flex items-center justify-between space-x-3">
            <FilterButton />
            <FilterButton />
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

        <Pagination isLoading={isLoading} paginator={paginator} />

        <BulkAction />
      </div>
    </div>
  );
};

export default BrandsPage;
