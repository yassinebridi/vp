import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Icon, Tooltip } from "@chakra-ui/react";
import { ActiveLink } from "@components";
import { useExpandSidebarStore, routes, capitalize } from "@utils";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";

export interface SidebarContentProps {}
const SidebarContent: React.FC<SidebarContentProps> = () => {
  const { expandSidebarProps, setExpandSidebarProps } = useExpandSidebarStore();

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <div
        className={clsx(
          "text-xl font-extrabold text-gray-800 dark:text-gray-200 flex",
          expandSidebarProps.expand
            ? "px-4 items-center justify-between"
            : "justify-center"
        )}
      >
        <Link to="/">
          <a className="flex flex-col items-center text-sm">
            <span className="text-lg font-extrabold leading-3">Vide</span>
            <span>Placard</span>
          </a>
        </Link>
        {expandSidebarProps.expand && (
          <button
            className="hidden text-blue-600 ringify rounded-md lg:block dark:text-blue-300"
            onClick={() => setExpandSidebarProps(false)}
            title="Collapse"
          >
            <ChevronLeftIcon
              className="p-1 bg-gray-200 dark:bg-gray-900 rounded-md"
              width="35x"
              height="35px"
            />
          </button>
        )}
      </div>
      <ul className="mt-6">
        {routes.map((route, i) => {
          const routeDisplay = capitalize(route.name);
          return route.routes ? (
            <div key={i} className="px-4">
              <SidebarSubmenu route={route} />
            </div>
          ) : (
            <li className="relative px-4" key={i}>
              <Tooltip
                label={routeDisplay}
                placement="auto-start"
                isDisabled={expandSidebarProps.expand}
                hasArrow
              >
                <ActiveLink
                  name={routeDisplay}
                  href={route.path}
                  className={clsx(sidebarButtonStyle)}
                >
                  <Icon boxSize={5} aria-hidden="true" as={route.icon} />
                  {expandSidebarProps.expand && (
                    <span className="ml-4">{routeDisplay}</span>
                  )}
                </ActiveLink>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarContent;

export const sidebarButtonStyle =
  "ringify inline-flex items-center w-full py-2 my-2 text-sm font-semibold rounded-md transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200";
