import { useExpandSidebarStore } from "@utils";
import clsx from "clsx";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export interface ActiveLinkProps {
  href: string;
  name: string;
  className: string;
}
const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  name,
  className,
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
    !expandSidebarProps.expand && "flex flex-col items-center p-2"
  );

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={classNames} title={name}>
      {isActive && (
        <span
          className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
      )}
      {children}
    </a>
  );
};

export default ActiveLink;
