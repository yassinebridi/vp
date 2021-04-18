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
import { useSortBy, useTable, useRowSelect } from "react-table";

export interface TableProps {}
const Table: React.FC<TableProps> = () => {
  const data = React.useMemo(
    () => [
      {
        fromUnit: "inches",
        toUnit: "millimetres (mm)",
        factor: 25.4,
      },
      {
        fromUnit: "feet",
        toUnit: "centimetres (cm)",
        factor: 30.48,
      },
      {
        fromUnit: "yards",
        toUnit: "metres (m)",
        factor: 0.91444,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "To convert",
        accessor: "fromUnit",
      },
      {
        Header: "Into",
        accessor: "toUnit",
      },
      {
        Header: "Multiply by",
        accessor: "factor",
        isNumeric: true,
      },
    ],
    []
  );
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
            <IndeterminateCheckbox
              {...getToggleAllRowsSelectedProps()}
              cs="dark:bg-[#29282e]"
            />
          </div>
        ),
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox
              {...row.getToggleRowSelectedProps()}
              cs="dark:bg-gray-900"
            />
          </div>
        ),
      },
      ...columns,
    ]);
  });

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden">
        <div className="flex justify-between min-w-full px-6 my-3 dark:text-gray-400">
          <div className="flex items-center space-x-6">
            <SearchIcon className="w-5 h-5" />
            <input
              className="w-[300px] bg-gray-900 outline-none"
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
                    isNumeric={column.isNumeric}
                    className={clsx(
                      "bg-gray-50 dark:bg-[#29282e] px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400",
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
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex items-center justify-between min-w-full px-6 my-3 mt-4 text-sm space-x-6 dark:text-gray-300">
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

const IndeterminateCheckbox = React.forwardRef<
  HTMLInputElement,
  { indeterminate: any; cs: string }
>(({ indeterminate, cs, ...rest }, ref) => {
  const defaultRef = React.useRef<HTMLInputElement>();
  const resolvedRef = (ref ||
    defaultRef) as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input
        type="checkbox"
        className={clsx(
          "form-checkbox ringify h-5 p-1 w-5 text-purple-500 bg-gray-500 rounded-md"
        )}
        ref={resolvedRef}
        {...rest}
      />
    </>
  );
});
