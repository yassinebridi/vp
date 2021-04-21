import { Filters, MyDialog } from "@components";
import { Popover, Transition } from "@headlessui/react";
import { PlusIcon, XIcon } from "@heroicons/react/outline";
import { getQueryParams, useTableContext } from "@utils";
import React from "react";
import { useLocation } from "react-router-dom";
import { useQueryParam } from "use-query-params";
import { KindType } from "./Filters";

const stringStateMapper = {
  is: "is",
  "is not": "isNot",
  contains: "contains",
};

export interface TableFiltersProps {}
const TableFilters: React.FC<TableFiltersProps> = () => {
  const { search } = useLocation();
  const queryString = getQueryParams(search);

  const [inputValue, setInputValue] = React.useState<string>();
  const [stringState, setStringState] = React.useState<string>("is");

  let [filterState, setFilterState] = React.useState<{
    name: string;
    kind: KindType;
  }>();
  let [isOpen, setIsOpen] = React.useState(false);
  const { columns, tableState } = useTableContext();
  const tableStateReady = tableState !== undefined;
  const columnsReady = columns.length > 0 && columns;

  const handleClickFilter = () => {
    console.log("click filter");
  };
  const handleCloseFilter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    console.log("close filter");
  };
  const handleAddFilter = (name, kind) => {
    setFilterState({ name, kind });
    setIsOpen(true);
  };
  const [_, setFiltersQuery] = useQueryParam(
    filterState
      ? `filter.${filterState.name}.${stringStateMapper[stringState]}`
      : ""
  );
  const handleDone = () => {
    setFiltersQuery(inputValue, "push");
  };
  return (
    <div className="flex flex-wrap flex-gap-4">
      <button
        onClick={handleClickFilter}
        className="flex items-center px-4 py-2 text-sm bg-gray-100 rounded-lg space-x-2 active:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify hover:bg-[#f7f7f7] active:bg-gray-200"
      >
        <div>
          <span className="text-gray-700 dark:text-white">Email</span>{" "}
          <span className="text-gray-500 dark:text-gray-300">contains</span>{" "}
          <span className="text-gray-700 dark:text-white">gmail</span>
        </div>
        <div
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
          onClick={handleCloseFilter}
        >
          <XIcon className="w-4 h-4" />
        </div>
      </button>

      <Popover as="div" className="relative inline-block">
        {({ open }) => (
          <>
            {/* TODO:Title To translate */}
            <Popover.Button
              title="New filter"
              className="h-full dark:text-gray-400 text-gray-700 flex items-center px-2 text-sm bg-gray-100 rounded-lg space-x-2 active:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify hover:bg-[#f7f7f7] active:bg-gray-200"
            >
              <PlusIcon className="w-6 h-6" />
            </Popover.Button>

            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel
                static
                className="absolute left-0 w-32 py-2 space-y-1 mt-2 bg-white shadow-2xl origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#2b2a2f]"
              >
                {columnsReady &&
                  tableStateReady &&
                  columns
                    .filter((col) => col.id !== "selection")
                    .map((column) => (
                      <div
                        key={column.id}
                        className="px-4 py-2 text-sm text-gray-600 cursor-pointer dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => handleAddFilter(column.id, column.kind)}
                      >
                        {column.Header}
                      </div>
                    ))}
              </Popover.Panel>
            </Transition>
            {filterState && (
              <MyDialog
                width="max-w-xs"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleDone={handleDone}
                handleCancel={() => console.log("cancel")}
                title="Payment successful"
              >
                <Filters
                  kind={filterState.kind}
                  handleDone={handleDone}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  stringState={stringState}
                  setStringState={setStringState}
                />
              </MyDialog>
            )}
          </>
        )}
      </Popover>
    </div>
  );
};

export default TableFilters;
