import { Icon, Tooltip } from "@chakra-ui/react";
import { ActiveLink, ThemeChanger } from "@components";
import { DropDown } from "@design-system";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import {
  capitalize,
  getRandomAvatar,
  routes,
  useExpandSidebarStore,
  useMe,
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

  const { meData } = useMe();

  return (
    <div className="flex flex-col justify-between h-full py-4 text-gray-800 dark:text-gray-100">
      <div className="">
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

      {expandSidebarProps.expand && (
        <DropDown>
          <div className="flex items-center justify-center w-full py-2 my-4 cursor-pointer group active:bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900 active:bg-gray-800">
            {meData.me.avatar === null ? (
              <div
                style={{ backgroundImage: getRandomAvatar() }}
                className={clsx(
                  expandSidebarProps.expand ? "w-10 h-10" : "w-8 h-8",
                  "rounded-full"
                )}
              />
            ) : (
              <img
                src={meData.me.avatar}
                alt={meData.me.name}
                className={clsx(
                  expandSidebarProps.expand ? "w-10 h-10" : "w-8 h-8",
                  " rounded-full"
                )}
              />
            )}
            {expandSidebarProps.expand && (
              <>
                <span className="ml-4">{meData.me.name}</span>
                <button className="ml-6">
                  <DotsHorizontalIcon className="w-6 h-6 dark:text-gray-400 text-gray-500 group-hover:text-gray-400 group-active:text-gray-500 dark:group-hover:text-gray-300 dark:group-active:text-gray-400" />
                </button>
              </>
            )}
          </div>
        </DropDown>
      )}
    </div>
  );
};

export default SidebarContent;

export const sidebarButtonStyle =
  "ringify inline-flex items-center w-full py-3 px-6 my-2 text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200";
