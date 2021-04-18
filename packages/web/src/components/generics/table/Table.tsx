import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";
import React from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { IndeterminateCheckbox } from ".";

export interface TableProps {
  dataArray: any;
  columnsArray: any;
}
const Table: React.FC<TableProps> = ({ dataArray, columnsArray }) => {
  const data = React.useMemo(() => dataArray, []);
  const columns = React.useMemo(() => columnsArray, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, useRowSelect, (hooks) => {
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

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden">
        <div className="flex justify-between min-w-full px-6 my-3 text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-6 text">
            <SearchIcon className="w-5 h-5" />
            <input
              className="w-[300px]  bg-white dark:bg-gray-900 outline-none"
              placeholder="Search by name..."
            />
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

        <table {...getTableProps()} className="min-w-full mt-6">
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
          <tbody {...getTableBodyProps()}>
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
                      isNumeric={cell.column.isNumeric}
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

export default Table;