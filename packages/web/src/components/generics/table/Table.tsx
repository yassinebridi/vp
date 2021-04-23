import { useDisclosure } from "@chakra-ui/react";
import { UpdateItem } from "@components";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import { useTableContext } from "@utils";
import clsx from "clsx";
import React from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { IndeterminateCheckbox } from ".";

export interface TableProps {
  dataArray: any;
  columnsArray: any;
  hiddenColumnsArray: string[];
}
const Table: React.FC<TableProps> = ({
  dataArray,
  columnsArray,
  hiddenColumnsArray,
}) => {
  const { isOpen: isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = React.useState<string>();

  const {
    setColumns,
    setTableState,
    setTableActions,
    setSelectedIds,
  } = useTableContext();

  const data = React.useMemo(() => dataArray, []);
  const columns = React.useMemo(() => columnsArray, []);
  const hiddenColumns = React.useMemo(() => hiddenColumnsArray, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    state,
    toggleAllRowsSelected,
    selectedFlatRows,
  } = useTable(
    { columns, data, initialState: { hiddenColumns } },
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          width: "6%",
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
    }
  );

  React.useEffect(() => {
    let selectedFlatRowsId = [];
    selectedFlatRows.map((row) => {
      selectedFlatRowsId.push(row.original.id);
    });
    setColumns(allColumns);
    setTableState(state);
    setSelectedIds(selectedFlatRowsId);
    setTableActions({ toggleAllRowsSelected });
  }, [setColumns, setTableState, state, selectedFlatRows]);

  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <table {...getTableProps()} className="min-w-full mt-3">
            <thead className="">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="">
                  {headerGroup.headers.map((column, i) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      style={{ width: column.width }}
                      className={clsx(
                        "bg-[#f7f7f7] dark:bg-[#29282e] px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400",
                        i === 0 && "rounded-l-lg",
                        i === headerGroup.headers.length - 1 && "rounded-r-lg"
                      )}
                    >
                      <div className="flex flex-row cursor-pointer space-x-1">
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
                    onClick={() => {
                      setId(row.original.id);
                      onOpen();
                    }}
                  >
                    {row.cells.map((cell, i) => (
                      <td
                        {...cell.getCellProps()}
                        className={clsx(
                          "whitespace-nowrap px-6 py-2",
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
        </div>
      </div>

      <UpdateItem isOpen={isOpen} onClose={onClose} id={id} />
    </>
  );
};

export default Table;
