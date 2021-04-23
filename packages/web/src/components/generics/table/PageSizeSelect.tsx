import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";
import { usePageState } from "@utils";
import clsx from "clsx";
import React from "react";
import { useQueryClient } from "react-query";
import { useQueryParam } from "use-query-params";

export interface PageSizeSelectProps {}
const PageSizeSelect: React.FC<PageSizeSelectProps> = () => {
  const { component } = usePageState();

  const queryClient = useQueryClient();
  const [selected, setSelected] = React.useState(sizes[1]);
  const [__, setPageSize] = useQueryParam("pageSize");

  const handleSizeChange = (e) => {
    setSelected(e);
    setPageSize(e.name);
    queryClient.resetQueries({ queryKey: [component] });
  };

  return (
    <div className="w-24">
      <Listbox value={selected} onChange={handleSizeChange}>
        {({ open }) => (
          <>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-100 rounded-lg shadow-md cursor-default dark:bg-gray-800 ringify sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-100 shadow-xl dark:bg-gray-850 bottom-10 rounded-md max-h-60 ringify sm:text-sm"
                >
                  {sizes.map((sizes, sizeId) => (
                    <Listbox.Option
                      key={sizeId}
                      className={({ active }) =>
                        clsx(
                          active
                            ? "dark:text-gray-100 text-purple-900 bg-purple-100 dark:bg-gray-700"
                            : "dark:text-gray-300 text-gray-900",
                          "cursor-default select-none relative py-2 pl-10 pr-4"
                        )
                      }
                      value={sizes}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={clsx(
                              selected ? "font-medium" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {sizes.name}
                          </span>
                          {selected ? (
                            <span
                              className={clsx(
                                active ? "text-purple-600" : "text-purple-600",
                                "absolute inset-y-0 left-0 flex items-center pl-3"
                              )}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default PageSizeSelect;

const sizes = [
  { id: 1, name: 10 },
  { id: 2, name: 20 },
  { id: 3, name: 50 },
  { id: 4, name: 75 },
];
