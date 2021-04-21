import { useLogoutMutation } from "@adapters";
import { Menu, Transition } from "@headlessui/react";
import { useExpandSidebarStore, useMe } from "@utils";
import clsx from "clsx";
import React, { FC } from "react";
import { Link } from "react-router-dom";

export interface DropDownProps {}
const DropDown: FC<DropDownProps> = ({ children }) => {
  const { expandSidebarProps } = useExpandSidebarStore();
  const { meData } = useMe();
  const { mutateAsync } = useLogoutMutation();

  const logout = async () => {
    await mutateAsync({});
    window.location.reload();
  };

  return (
    <div className={clsx("w-full", expandSidebarProps.expand && "relative")}>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button as="div" className="w-full">
              {children}
            </Menu.Button>

            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items
                static
                className="shadow-2xl absolute inset-x-0 m-4 outline-none bottom-20 bg-white dark:bg-[#313035] origin-center divide-y dark:divide-gray-600 divide-gray-200 rounded-md dark:text-gray-300"
              >
                <div className="px-4 py-3">
                  <p className="text-sm leading-5 dark:text-gray-400">
                    Logged in as
                  </p>
                  <p className="text-sm font-medium truncate leading-5">
                    {meData.me.email}
                  </p>
                </div>

                <div className="py-1">
                  <Menu.Item as={Link} to="/settings" className={resolveClass}>
                    Account settings
                  </Menu.Item>
                </div>

                <div className="py-1">
                  <Menu.Item
                    as="button"
                    onClick={logout}
                    className={resolveClass}
                  >
                    Sign out
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default DropDown;

const resolveClass = ({
  active,
  disabled,
}: {
  active?: boolean;
  disabled?: boolean;
}) => {
  return clsx(
    "flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer",
    active
      ? "dark:bg-gray-700 dark:text-gray-100 bg-gray-100 text-gray-900"
      : "dark:text-gray-300 text-gray-700",
    disabled && "cursor-not-allowed opacity-50"
  );
};
