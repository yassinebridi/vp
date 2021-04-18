import { useExpandSidebarStore } from "@utils";
import clsx from "clsx";
import React from "react";
import SidebarContent from "./SidebarContent";

export interface DesktopSidebarProps {}
const DesktopSidebar: React.FC<DesktopSidebarProps> = () => {
  const { expandSidebarProps } = useExpandSidebarStore();

  return (
    <aside
      className={clsx(
        "z-30 flex-shrink-0 hidden overflow-y-auto bg-white dark:bg-gray-850 lg:block bg-gray-50",
        expandSidebarProps.expand && `w-64`
      )}
    >
      <SidebarContent />
    </aside>
  );
};

export default DesktopSidebar;
