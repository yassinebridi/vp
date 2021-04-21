import React from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  DotsHorizontalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";

export interface ColumnActionsProps {
  id: string;
}
const ColumnActions: React.FC<ColumnActionsProps> = ({ id }) => {
  return (
    <Popover as="div" className="relative inline-block">
      {({ open }) => (
        <>
          {/* TODO:Title To translate */}
          <Popover.Button
            title="Actions"
            className="inline-flex justify-center w-full p-3 text-sm font-medium hover:bg-gray-100 active:bg-gray-200 active:shadow-lg rounded-md dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify"
          >
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
              className="absolute right-0 z-40 w-32 py-2 space-y-1 mt-2 bg-white shadow-2xl origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#2b2a2f]"
            >
              <div
                className="flex px-4 py-2 text-sm text-gray-800 cursor-pointer space-x-2 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => alert(id)}
              >
                <PencilAltIcon className="w-5 h-5" />
                <span>Edit</span>
              </div>
              <div
                className="flex px-4 py-2 text-sm text-gray-800 cursor-pointer space-x-2 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => alert(id)}
              >
                <TrashIcon className="w-5 h-5" />
                <span>Trash</span>
              </div>
            </Popover.Panel>
          </Transition>
          {/* {filterState && ( */}
          {/*   <MyDialog */}
          {/*     width="max-w-xs" */}
          {/*     isOpen={isOpen} */}
          {/*     setIsOpen={setIsOpen} */}
          {/*     handleDone={handleDone} */}
          {/*     handleCancel={() => null} */}
          {/*     title="Payment successful" */}
          {/*   > */}
          {/*     <Filters */}
          {/*       kind={filterState.kind} */}
          {/*       handleDone={handleDone} */}
          {/*       inputValue={inputValue} */}
          {/*       setInputValue={setInputValue} */}
          {/*       stringState={stringState} */}
          {/*       setStringState={setStringState} */}
          {/*     /> */}
          {/*   </MyDialog> */}
          {/* )} */}
        </>
      )}
    </Popover>
  );
};

export default ColumnActions;
