import { Sorts, MyDialog } from "@components";
import { Popover, Transition } from "@headlessui/react";
import { PlusIcon, XIcon } from "@heroicons/react/outline";
import { capitalize, getSortKind, useMyParams, useTableContext } from "@utils";
import React from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router";
import { useQueryParam } from "use-query-params";
import { KindType } from "./Sorts";

export interface TableSortsProps {}
const TableSorts: React.FC<TableSortsProps> = () => {
  const sortsMapper = {
    asc: "Ascending",
    desc: "Descending",
  };
  const queryClient = useQueryClient();
  const router = useHistory();
  const queryParams = new URLSearchParams(location.search);
  const [sort] = useMyParams<[object]>([{ query: "sort", type: "object" }]);

  const { columns, tableState } = useTableContext();
  let [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>();

  let [sortState, setSortState] = React.useState<{
    name: string;
    kind: KindType;
  }>();

  const [_, setSortsQuery] = useQueryParam(
    sortState ? `sort.${sortState.name}` : ""
  );

  const [__, setPageNo] = useQueryParam("pageNo");

  const tableStateReady = tableState !== undefined;
  const columnsReady = columns.length > 0 && columns;

  const handleClickSort = (name, kind, inputValue) => {
    setSortState({ name, kind });
    setInputValue(inputValue);
    setIsOpen(true);
  };
  const handleCloseSort = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    query: string
  ) => {
    e.stopPropagation();
    queryParams.delete(query);
    router.push({
      search: queryParams.toString(),
    });
    queryClient.resetQueries({ queryKey: ["brands"] });
  };
  const handleAddSort = (name, kind) => {
    setSortState({ name, kind });
    setInputValue("");
    setIsOpen(true);
  };
  const handleDone = () => {
    if (inputValue.length > 0) {
      setSortsQuery(inputValue, "pushIn");
      setPageNo(1);
      queryClient.resetQueries({ queryKey: ["brands"] });
    }
  };
  return (
    <div className="flex flex-wrap flex-gap-4">
      {sort &&
        Object.entries(sort).map(([key, value]) => {
          const kind = getSortKind(value);
          return (
            <button
              key={key}
              onClick={() => handleClickSort(key, kind, inputValue)}
              className="flex items-center px-4 py-2 text-sm bg-gray-100 rounded-lg space-x-2 active:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify hover:bg-[#f7f7f7] active:bg-gray-200"
            >
              <div>
                <span className="text-gray-700 dark:text-white">
                  {capitalize(key)}
                </span>{" "}
                <span>:</span>{" "}
                <span className="text-gray-700 dark:text-white">
                  {sortsMapper[value]}
                </span>
              </div>
              <div
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                onClick={(e) => handleCloseSort(e, `sort.${key}`)}
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
              title="New sort"
              className="h-full dark:text-gray-400 text-gray-700 flex items-center p-2 text-sm bg-gray-100 rounded-lg space-x-1 active:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify hover:bg-[#f7f7f7] active:bg-gray-200"
            >
              <PlusIcon className="w-6 h-6" />
              {!sort && <span className="pr-1">New sort</span>}
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
                        onClick={() => handleAddSort(column.id, column.kind)}
                      >
                        {column.Header}
                      </div>
                    ))}
              </Popover.Panel>
            </Transition>
            {/* TODO: Translate title */}
            {sortState && (
              <MyDialog
                width="max-w-xs"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleDone={handleDone}
                handleCancel={() => null}
                title="Adding a sort"
                actionButton={{ title: "Apply sorts" }}
              >
                <Sorts
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  kind={sortState.kind}
                />
              </MyDialog>
            )}
          </>
        )}
      </Popover>
    </div>
  );
};

export default TableSorts;
