import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useQueryParams } from "@utils";
import clsx from "clsx";
import React from "react";
import { useHistory } from "react-router";
import { useRowSelect, useSortBy, useTableLoading } from "react-table";
import { IndeterminateCheckbox } from ".";

export interface TableLoadingProps {
  component: string;
  dataArray: any;
  columnsArray: any;
}
const TableLoading: React.FC<TableLoadingProps> = ({
  component,
  dataArray,
  columnsArray,
}) => {
  const router = useHistory();
  const query = useQueryParams();
  const searchTerm = query.get("search");
  const [searchValue, setSearchValue] = React.useState(
    searchTerm ? searchTerm : undefined
  );
  const data = React.useMemo(() => dataArray, []);
  const columns = React.useMemo(() => columnsArray, []);

  const {
    getTableLoadingProps,
    getTableLoadingBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTableLoading({ columns, data }, useSortBy, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => [
      {
        id: "selection",
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      ...columns,
    ]);
  });

  const handleSearchSumbit = () => {
    router.push({
      pathname: component,
      search: `?search=${searchValue}`,
    });
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden">
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

        <table {...getTableLoadingProps()} className="min-w-full mt-6">
          <thead className="">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="">
                {headerGroup.headers.map((column, i) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={clsx(
                      "bg-[#f7f7f7] dark:bg-[#29282e] px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400",
                      i === 0 && "rounded-l-lg",
                      i === headerGroup.headers.length - 1 && "rounded-r-lg"
                    )}
                  >
                    <div className="flex flex-row space-x-1">
                      <span>{column.render("Header")}</span>
                      <span className="">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <ArrowDownIcon
                              className="w-4 h-4"
                              aria-label="sorted descending"
                            />
                          ) : (
                            <ArrowUpIcon
                              className="w-4 h-4"
                              aria-label="sorted ascending"
                            />
                          )
                        ) : null}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableLoadingBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="cursor-pointer hover:bg-[#f7f7f7] active:bg-gray-100 dark:active:bg-gray-800 dark:hover:bg-gray-850"
                >
                  {row.cells.map((cell, i) => (
                    <td
                      {...cell.getCellProps()}
                      className={clsx(
                        "whitespace-nowrap px-6 py-3",
                        i === 0 && "rounded-l-lg",
                        i === row.cells.length - 1 && "rounded-r-lg"
                      )}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

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

export default TableLoading;
