import { useCountBrandsQuery } from "@adapters";
import { CreateItem } from "@components";
import { ArrowRightIcon, MenuIcon } from "@heroicons/react/outline";
import { capitalize, useExpandSidebarStore, usePageState } from "@utils";
import React from "react";
import { Link } from "react-router-dom";

export interface PageHeaderProps {}
const PageHeader: React.FC<PageHeaderProps> = () => {
  const { component, isTrash } = usePageState();
  const { expandSidebarProps, setExpandSidebarProps } = useExpandSidebarStore();

  const { data, isLoading } = useCountBrandsQuery({
    where: { isTrash: { equals: true } },
  });
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
            {capitalize(component)} {isTrash && "(Trash)"}
          </h2>
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <Link
          to={`/${component}/trash`}
          className="relative text-gray-600 bg-gray-200 dark:text-white rounded-2xl hover:bg-gray-100 active:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-800 ringify"
        >
          <span className="inline-flex items-center px-2 py-2 space-x-1">
            <span className="pl-1 text-sm">Trash</span>
            <ArrowRightIcon className="w-4 h-4" />
          </span>
          {isLoading ? null : (
            <span className="absolute flex items-center px-1 text-xs font-bold text-white bg-red-500 rounded-full -right-1 -top-1">
              {data.countBrands}
            </span>
          )}
        </Link>
        <CreateItem />
      </div>
    </div>
  );
};

export default PageHeader;
