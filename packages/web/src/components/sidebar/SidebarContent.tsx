import { Icon, Tooltip } from "@chakra-ui/react";
import { ActiveLink, ThemeChanger } from "@components";
import {
  capitalize,
  routes,
  useExpandSidebarStore,
  useSidebarStore,
} from "@utils";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";

export interface SidebarContentProps {}
const SidebarContent: React.FC<SidebarContentProps> = () => {
  const { expandSidebarProps } = useExpandSidebarStore();
  const { setSidebarProps, sidebarProps } = useSidebarStore();

  return (
    <div className="py-4 text-gray-800 dark:text-gray-100">
      <div
        className={clsx(
          "text-xl font-extrabold text-gray-800 dark:text-gray-200 flex",
          expandSidebarProps.expand
            ? "px-4 items-center justify-between"
            : "justify-center"
        )}
      >
        {expandSidebarProps.expand ? (
          <>
            <Link to="/">
              <a className="flex flex-col items-center text-sm">
                <span className="text-lg font-extrabold leading-3">Vide</span>
                <span>Placard</span>
              </a>
            </Link>
            <ThemeChanger />
          </>
        ) : (
          <Link to="/">
            <a className="flex flex-col items-center text-sm">
              <span className="text-lg font-extrabold">VP</span>
            </a>
          </Link>
        )}
      </div>
      <ul className="mt-6">
        {routes.map((route, i) => {
          const routeDisplay = capitalize(route.name);
          return route.routes ? (
            <li key={i}>
              <SidebarSubmenu route={route} />
            </li>
          ) : (
            <li key={i}>
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
  "ringify inline-flex items-center w-full py-3 px-6 my-2 text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200";
