import { Filters, MyDialog } from "@components";
import { Popover, Transition } from "@headlessui/react";
import { PlusIcon, XIcon } from "@heroicons/react/outline";
import {
  capitalize,
  getFilterKind,
  usePageState,
  useMyParams,
  useTableContext,
} from "@utils";
import React from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router";
import { useQueryParam } from "use-query-params";
import { KindType } from "./Filters";

const stringStateMapper = {
  is: "is",
  "is not": "isNot",
  contains: "contains",
};

export interface TableFiltersProps {}
const TableFilters: React.FC<TableFiltersProps> = () => {
  const queryClient = useQueryClient();
  const router = useHistory();
  const { component } = usePageState();
  const { columns, tableState } = useTableContext();

  let [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>();
  const [stringState, setStringState] = React.useState<string>();
  let [filterState, setFilterState] = React.useState<{
    name: string;
    kind: KindType;
  }>();

  const queryParams = new URLSearchParams(location.search);
  const [filter] = useMyParams<[object]>([{ query: "filter", type: "object" }]);
  const [_, setFiltersQuery] = useQueryParam(
    filterState
      ? `filter.${filterState.name}.${stringStateMapper[stringState]}`
      : ""
  );
  const [__, setPageNo] = useQueryParam("pageNo");

  const tableStateReady = tableState !== undefined;
  const columnsReady = columns.length > 0 && columns;

  const handleClickFilter = (name, kind, stringState, inputValue) => {
    setFilterState({ name, kind });
    setStringState(stringState);
    setInputValue(inputValue);
    setIsOpen(true);
  };
  const handleCloseFilter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    query: string
  ) => {
    e.stopPropagation();
    queryParams.delete(query);
    router.push({
      search: queryParams.toString(),
    });
    queryClient.resetQueries({ queryKey: [component] });
  };
  const handleAddFilter = (name, kind) => {
    setFilterState({ name, kind });
    setStringState("is");
    setInputValue("");
    setIsOpen(true);
  };
  const handleDone = () => {
    if (inputValue.length > 0) {
      setFiltersQuery(inputValue, "replace");
      setPageNo(1);
      queryClient.resetQueries({ queryKey: [component] });
    }
  };
  return (
    <div className="flex flex-wrap flex-gap-4">
      {filter &&
        Object.entries(filter).map(([key, value]) => {
          const kind = getFilterKind(value);
          const stringState =
            Object.keys(value)[0] === "isNot"
              ? "is not"
              : Object.keys(value)[0];
          const inputValue = value[Object.keys(value)[0]];
          return (
            <button
              key={key}
              onClick={() =>
                handleClickFilter(key, kind, stringState, inputValue)
              }
              className="flex items-center px-4 py-2 text-sm bg-gray-100 rounded-lg space-x-2 active:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify hover:bg-[#f7f7f7] active:bg-gray-200"
            >
              <div>
                <span className="text-gray-700 dark:text-white">
                  {capitalize(key)}
                </span>{" "}
                <span className="text-gray-500 dark:text-gray-300">
                  {stringState}
                </span>{" "}
                <span className="text-gray-700 dark:text-white">
                  {inputValue}
                </span>
              </div>
              <div
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                onClick={(e) =>
                  handleCloseFilter(e, `filter.${key}.${Object.keys(value)[0]}`)
                }
              >
                <XIcon className="w-4 h-4" />
              </div>
            </button>
          );
        })}

      <Popover as="div" className="relative inline-block">
        {({ open }) => (
          <>
            {/* TODO:Title To translate */}
            <Popover.Button
              title="New filter"
              className="h-full items-center dark:text-gray-400 text-gray-700 flex items-center p-2 text-sm bg-gray-100 rounded-lg space-x-1 active:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify hover:bg-[#f7f7f7] active:bg-gray-200"
            >
              <PlusIcon className="w-6 h-6" />
              {!filter && <span className="pr-1">New filter</span>}
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
                className="absolute z-20 left-0 w-32 py-2 space-y-1 mt-2 bg-white shadow-2xl origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#2b2a2f]"
              >
                {columnsReady &&
                  tableStateReady &&
                  columns
                    .filter((col) => col.id !== "selection")
                    .filter((col) => col.id !== "actions")
                    .map((column) => (
                      <div
                        key={column.id}
                        className="px-4 py-2 text-sm text-gray-800 cursor-pointer dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => handleAddFilter(column.id, column.kind)}
                      >
                        {column.Header}
                      </div>
                    ))}
              </Popover.Panel>
            </Transition>
            {/* TODO: Translate title */}
            {filterState && (
              <MyDialog
                width="max-w-xs"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleDone={handleDone}
                handleCancel={() => null}
                title="Adding a filter"
                actionButton={{ title: "Apply filters" }}
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
