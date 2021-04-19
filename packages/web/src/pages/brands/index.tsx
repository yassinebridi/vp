import { useBrandsQuery } from "@adapters";
import { BrandsTable, PageHeader } from "@components";
import { SpinnerIcon } from "@design-system";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useQueryParams } from "@utils";
import React from "react";
import { useHistory } from "react-router";

export interface BrandsPageProps {}
const BrandsPage: React.FC<BrandsPageProps> = () => {
  const router = useHistory();
  const query = useQueryParams();
  const searchTerm = query.get("search");
  const [searchValue, setSearchValue] = React.useState(
    searchTerm ? searchTerm : undefined
  );

  const { data: brandsData, isLoading } = useBrandsQuery({
    where: { name: { contains: searchTerm ? searchTerm : undefined } },
  });

  const handleSearchSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "brands",
      search: `?search=${searchValue}`,
    });
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <div className="px-6 py-6">
      <PageHeader component="brands" />
      <div className="mt-6">
        <div className="flex justify-between min-w-full px-6 my-3 text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-6 text">
            <SearchIcon className="w-5 h-5" />
            <form onSubmit={handleSearchSumbit}>
              <input
                value={searchValue}
                onChange={handleSearchChange}
                className="w-[300px]  bg-white dark:bg-gray-900 outline-none"
                placeholder="Search by name..."
              />
            </form>
          </div>
          <div className="flex justify-between space-x-6">
            <button className="flex items-center space-x-2">
              <span>Filters</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            <button className="">
              <DotsHorizontalIcon className="w-5 h-5" />
            </button>
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
