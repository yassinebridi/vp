import { MeQuery, useLogoutMutation } from "@adapters";
import { Avatar } from "@chakra-ui/react";
import { Menu, Transition } from "@headlessui/react";
import { capitalize } from "@utils";
import clsx from "clsx";
import React, { FC } from "react";
import { Link } from "react-router-dom";

export interface DropDownProps {
  me: MeQuery["me"];
}
const DropDown: FC<DropDownProps> = ({ me }) => {
  const { mutateAsync } = useLogoutMutation();

  const logout = async () => {
    await mutateAsync({});
    window.location.reload();
  };

  return (
    <div className="relative inline-block text-left text-gray-500 dark:text-gray-400">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="rounded-full ringify">
              <Avatar size="sm" name={capitalize(me.name)} src={me.avatar} />
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
                className="absolute right-0 w-56 mt-2 bg-white border border-gray-200 shadow-lg outline-none dark:border-gray-700 dark:bg-gray-800 origin-top-right divide-y dark:divide-gray-700 divide-gray-100 rounded-md"
              >
                <div className="px-4 py-3">
                  <p className="text-sm leading-5">Logged in as</p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300 leading-5">
                    {me.email}
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
