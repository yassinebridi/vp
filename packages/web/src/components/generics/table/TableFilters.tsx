import { PlusIcon, XIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import React from "react";
import { useTableContext } from "@utils";
import { MyDialog } from "@components";

export interface TableFiltersProps {}
const TableFilters: React.FC<TableFiltersProps> = () => {
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
  const handleAddFilter = () => {
    console.log("add filter");
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

      {/* TODO:To translate */}
      {/* <button */}
      {/*   onClick={handleAddFilter} */}
      {/*   title="New filter" */}
      {/*   className="dark:text-gray-400 text-gray-700 flex items-center px-2 text-sm bg-gray-100 rounded-lg space-x-2 active:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify hover:bg-[#f7f7f7] active:bg-gray-200" */}
      {/* > */}
      {/*   <PlusIcon className="w-6 h-6" /> */}
      {/* </button> */}

      <Popover as="div" className="relative inline-block">
        {({ open }) => (
          <>
            <Popover.Button className="h-full dark:text-gray-400 text-gray-700 flex items-center px-2 text-sm bg-gray-100 rounded-lg space-x-2 active:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify hover:bg-[#f7f7f7] active:bg-gray-200">
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
                className="absolute left-0 w-32 py-2 space-y-1 mt-2 text-gray-300 bg-white shadow-2xl origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#2b2a2f]"
              >
                {columnsReady &&
                  tableStateReady &&
                  columns
                    .filter((col) => col.id !== "selection")
                    .map((column) => (
                      <div
                        key={column.id}
                        className="px-4 py-2 text-sm cursor-pointer dark:hover:bg-gray-700"
                        onClick={() => setIsOpen(true)}
                      >
                        {column.Header}
                      </div>
                    ))}
              </Popover.Panel>
            </Transition>
            <MyDialog
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              handleDone={() => console.log("done")}
              handleCancel={() => console.log("cancel")}
              title="Payment successful"
            />
          </>
        )}
      </Popover>
    </div>
  );
};

export default TableFilters;
