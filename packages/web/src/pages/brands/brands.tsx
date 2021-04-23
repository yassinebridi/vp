import { BrandsQueryVariables, SortOrder, useBrandsQuery } from "@adapters";
import {
  BrandsBulkAction,
  BrandsTable,
  FilterButton,
  PageHeader,
  Pagination,
  SortButton,
  TableFilters,
  TableSearch,
  TableSettingsDropdown,
  TableSorts,
} from "@components";
import { SpinnerIcon } from "@design-system";
import {
  PageStateProvider,
  paginate,
  useFilterStore,
  useMyParams,
  useSortStore,
} from "@utils";
import React from "react";

export interface BrandsPageProps {}
const BrandsPage: React.FC<BrandsPageProps> = () => {
  const { filterProps } = useFilterStore();
  const { sortProps } = useSortStore();

  const [searchTerm, filter, sort, pageNoQuery, pageSizeQuery] = useMyParams<
    [string, any, any, number, number]
  >([
    { query: "search", type: "string" },
    { query: "filter", type: "object" },
    { query: "sort", type: "object" },
    { query: "pageNo", type: "number" },
    { query: "pageSize", type: "number" },
  ]);

  const pageNo = pageNoQuery || 1;
  const pageSize = pageSizeQuery || 20;
  const skip = (pageNo - 1) * pageSize;
  const take = pageSize;

  let orderBy: BrandsQueryVariables["orderBy"] = [];
  if (sort) {
    sort.name ? orderBy.push({ name: sort.name }) : undefined;
    sort.date ? orderBy.push({ createdAt: sort.date }) : undefined;
  } else {
    orderBy = [{ createdAt: SortOrder.Desc }];
  }
  const brandsVariables: BrandsQueryVariables = {
    take,
    skip,
    orderBy,
    where: {
      isTrash: { equals: false },
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
    <PageStateProvider
      component="brands"
      countComponent="countBrands"
      isTrash={false}
    >
      <div className="px-6 py-6">
        <PageHeader />
        <div className="mt-6">
          <div className="flex items-center justify-between min-w-full px-6 text-gray-600 dark:text-gray-400">
            <TableSearch />

            <div className="flex items-center justify-between space-x-3">
              <SortButton />
              <FilterButton />
              <TableSettingsDropdown />
            </div>
          </div>

          {filterProps.open && (
            <div className="my-2">
              <TableFilters />
            </div>
          )}
          {sortProps.open && (
            <div className="my-2">
              <TableSorts />
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

          <BrandsBulkAction />
        </div>
      </div>
    </PageStateProvider>
  );
};

export default BrandsPage;
