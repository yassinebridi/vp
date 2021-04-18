import { useExpandSidebarStore } from "@utils";
import clsx from "clsx";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export interface ActiveLinkProps {
  href: string;
  name: string;
  className: string;
  isSub?: boolean;
}
const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  name,
  className,
  isSub,
  children,
}) => {
  const { expandSidebarProps } = useExpandSidebarStore();
  const router = useHistory();
  const location = useLocation();
  const isActive = location.pathname === href;
  const activeClassName = isActive ? "text-gray-800 dark:text-gray-100" : "";
  const classNames = clsx(
    activeClassName,
    className,
    isSub && "dark:text-gray-400 text-gray-500 font-medium",
    isSub && !isActive && "hover:text-gray-600",
    isSub &&
      isActive &&
      "dark:bg-gray-900 bg-gray-100 text-purple-600 hover:text-purple-700",
    !expandSidebarProps.expand && "flex flex-col items-center p-2"
  );

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={classNames} title={name}>
      {children}
    </a>
  );
};

export default ActiveLink;

// {
//   isActive && (
//     <span
//       className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg"
//       aria-hidden="true"
//     ></span>
//   );
// }
