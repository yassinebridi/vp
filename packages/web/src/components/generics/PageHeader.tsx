import { MenuIcon, PlusIcon } from "@heroicons/react/outline";
import { capitalize, useExpandSidebarStore } from "@utils";
import React from "react";
import { Link } from "react-router-dom";

export interface PageHeaderProps {
  component: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({ component }) => {
  const { expandSidebarProps, setExpandSidebarProps } = useExpandSidebarStore();

  return (
    <div className="flex items-center justify-between px-[1.06rem]">
      <div className="flex items-center space-x-4">
        <button
          className="p-1 rounded-md focus:outline-none focus:shadow-outline-purple"
          onClick={() => {
            setExpandSidebarProps(!expandSidebarProps.expand);
          }}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </button>
        <Link to={`/${component}`}>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100">
            {capitalize(component)}
          </h2>
        </Link>
      </div>

      <div>
        <button className="text-white bg-purple-500 rounded-full hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          <PlusIcon className="w-10 h-10 p-2" />
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
