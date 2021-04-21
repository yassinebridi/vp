import { Popover, Transition } from "@headlessui/react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { useTableContext } from "@utils";
import React from "react";

export interface TableSettingsDropdownProps {}
const TableSettingsDropdown: React.FC<TableSettingsDropdownProps> = () => {
  const { columns, tableState } = useTableContext();
  const tableStateReady = tableState !== undefined;
  const columnsReady = columns.length > 0 && columns;

  return (
    <Popover as="div" className="relative inline-block">
      {({ open }) => (
        <>
          <Popover.Button className="inline-flex justify-center w-full p-3 text-sm font-medium hover:bg-gray-100 active:bg-gray-200 active:shadow-lg rounded-md dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify">
            <DotsHorizontalIcon className="w-5 h-5" />
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
              className="absolute right-0 w-32 py-2 mt-2 text-gray-700 dark:text-gray-300 bg-white shadow-2xl origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#2b2a2f]"
            >
              {columnsReady &&
                tableStateReady &&
                columns
                  .filter((col) => col.id !== "selection")
                  .map((column) => (
                    <div key={column.id}>
                      <label className="flex items-center w-full px-4 py-2 text-sm cursor-pointer space-x-4 leading-5">
                        <input
                          className="w-5 h-5 p-1 text-purple-500 form-checkbox ringify dark:text-gray-500 dark:bg-gray-500 rounded-md"
                          type="checkbox"
                          {...column.getToggleHiddenProps()}
                          checked={column.getToggleHiddenProps().isVisible}
                          onChange={(e) => {
                            column.getToggleHiddenProps().onChange(e);
                            column.toggleHidden(
                              column.getToggleHiddenProps().checked
                            );
                          }}
                          defaultChecked={column.getToggleHiddenProps().checked}
                        />
                        <span className="text-left">{column.Header}</span>
                      </label>
                    </div>
                  ))}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default TableSettingsDropdown;
