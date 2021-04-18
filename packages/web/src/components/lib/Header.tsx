import { Input } from "@chakra-ui/react";
import { ThemeChanger } from "@components";
import DropDown from "@design-system/dropdown";
import {
  ChevronRightIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import {
  useExpandSidebarStore,
  useMe,
  useProfileStore,
  useSidebarStore,
} from "@utils";
import React from "react";

export interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const { setSidebarProps, sidebarProps } = useSidebarStore();
  const { meData } = useMe();
  const { setExpandSidebarProps, expandSidebarProps } = useExpandSidebarStore();
  const { setProfileProps, profileProps } = useProfileStore();

  return (
    <header className="relative z-40 py-2 bg-white bg-gray-100 shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {!expandSidebarProps.expand && (
          <button
            className="absolute bg-gray-200 dark:bg-gray-900 py-1 left-0 hidden text-white text-purple-600 dark:text-purple-300 top-1.5 lg:block rounded-r-md"
            onClick={() => setExpandSidebarProps(true)}
            aria-label="Menu"
            title="Expand"
          >
            <ChevronRightIcon className="rounded-r-md h-6 w-6" />
          </button>
        )}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={() => setSidebarProps(!sidebarProps.open)}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="inputify"
              placeholder="Search"
              aria-label="Search"
              fontSize="sm"
              px={8}
            />
          </div>
        </div>
        <ul className="flex items-center justify-center flex-shrink-0 space-x-6">
          <li className="flex">
            <ThemeChanger />
          </li>

          <li className="relative">
            <DropDown me={meData.me} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
