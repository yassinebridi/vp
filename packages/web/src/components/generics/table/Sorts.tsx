import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import React from "react";

export type KindType = "string" | "number" | "date";
export interface SortsProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  kind: KindType;
}
const Sorts: React.FC<SortsProps> = ({ kind, inputValue, setInputValue }) => {
  const [selected, setSelected] = React.useState(
    inputValue ? sorts.find((sort) => sort.action === inputValue) : sorts[0]
  );

  React.useEffect(() => {
    setInputValue("asc");
  }, []);

  const handleSizeChange = (e) => {
    setSelected(e);
    setInputValue(e.action);
  };

  return (
    <>
      {kind === "string" || kind === "number" || kind === "date" ? (
        <div className="w-full">
          <Listbox value={selected} onChange={handleSizeChange}>
            {({ open }) => (
              <>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 my-3 text-left bg-gray-100 rounded-lg shadow-md cursor-default dark:bg-gray-800 ringify sm:text-sm">
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
                      className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-100 shadow-xl dark:bg-gray-850 top-12 rounded-md max-h-60 ringify sm:text-sm"
                    >
                      {sorts.map((sorts, sizeId) => (
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
                          value={sorts}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={clsx(
                                  selected ? "font-medium" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {sorts.name}
                              </span>
                              {selected ? (
                                <span
                                  className={clsx(
                                    active
                                      ? "text-purple-600"
                                      : "text-purple-600",
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
      ) : kind === "number" ? (
        <div>number</div>
      ) : kind === "date" ? (
        <div>daaate</div>
      ) : null}
    </>
  );
};

export default Sorts;

const sorts = [
  { id: 1, name: "Ascending", action: "asc" },
  { id: 2, name: "Descending", action: "desc" },
];
