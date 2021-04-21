import { SearchIcon } from "@heroicons/react/outline";
import { TableContext } from "@utils";
import React from "react";
import { StringParam, useQueryParam } from "use-query-params";

export interface TableSearchProps {}
const TableSearch: React.FC<TableSearchProps> = () => {
  const { searchValue, setSearchValue } = React.useContext(TableContext);
  const [_, setSearch] = useQueryParam("search", StringParam);

  const handleSearchSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(searchValue);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
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
  );
};

export default TableSearch;
