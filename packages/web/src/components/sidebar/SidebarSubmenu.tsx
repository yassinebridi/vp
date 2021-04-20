import { Icon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import { ActiveLink } from "@components";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { routes, useExpandSidebarStore, capitalize } from "@utils";
import clsx from "clsx";
import React, { useState } from "react";
import { sidebarButtonStyle } from "./SidebarContent";

export interface SidebarSubmenuProps {
  route: typeof routes[0];
}
const SidebarSubmenu: React.FC<SidebarSubmenuProps> = ({ route }) => {
  const { expandSidebarProps } = useExpandSidebarStore();
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  const routeDisplay = capitalize(route.name);
  return (
    <div
      className={clsx(
        !expandSidebarProps.expand && "flex flex-col items-center"
      )}
      key={route.name}
    >
      {route.routes ? (
        <Tooltip
          label={routeDisplay}
          placement="auto-start"
          isDisabled={expandSidebarProps.expand}
          hasArrow
        >
          <button
            className={clsx(
              sidebarButtonStyle,
              `flex ${
                expandSidebarProps.expand
                  ? "justify-between"
                  : "dark:bg-gray-900 bg-gray-200 p-2 justify-center"
              }`
            )}
            title={routeDisplay}
            onClick={handleDropdownMenuClick}
            aria-haspopup="true"
          >
            <span className="inline-flex items-center">
              <Icon boxSize={5} aria-hidden="true" as={route.icon} />
              {expandSidebarProps.expand && (
                <span className="ml-4">{routeDisplay}</span>
              )}
            </span>
            {expandSidebarProps.expand && (
              <>
                {isDropdownMenuOpen ? (
                  <ChevronUpIcon className="w-5 h-5 ml-2" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 ml-2" />
                )}
              </>
            )}
          </button>
        </Tooltip>
      ) : (
        <Tooltip
          label={routeDisplay}
          placement="auto-start"
          isDisabled={expandSidebarProps.expand}
          hasArrow
        >
          {/* Tooltip's child need to use React.forwardRef, so i need a span here */}
          <span>
            <ActiveLink
              name={routeDisplay}
              href={route.path}
              className={clsx(sidebarButtonStyle)}
              isSub={true}
            >
              <Icon boxSize={5} aria-hidden="true" as={route.icon} />
              {expandSidebarProps.expand && (
                <span className="ml-4">{routeDisplay}</span>
              )}
            </ActiveLink>
          </span>
        </Tooltip>
      )}
      {route.routes && (
        <Transition
          show={isDropdownMenuOpen}
          enter="transition-all ease-in-out duration-100"
          enterFrom="opacity-25 max-h-0"
          enterTo="opacity-100 max-h-xl"
          leave="transition-all ease-in-out duration-100"
          leaveFrom="opacity-100 max-h-xl"
          leaveTo="opacity-0 max-h-0"
        >
          {route.routes.map((r, i) => {
            return (
              <div key={i}>
                <SidebarSubmenu route={r} />
              </div>
            );
          })}
        </Transition>
      )}
    </div>
  );
};

export default SidebarSubmenu;
