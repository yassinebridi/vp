import { useExpandSidebarStore } from "@utils";
import React from "react";
import SidebarContent from "./SidebarContent";

export interface DesktopSidebarProps {}
const DesktopSidebar: React.FC<DesktopSidebarProps> = () => {
  const { expandSidebarProps } = useExpandSidebarStore();

  return (
    <aside
      className={`z-30 flex-shrink-0 hidden ${
        expandSidebarProps.expand && `w-56`
      } overflow-y-auto bg-white dark:bg-gray-850 lg:block bg-gray-100`}
    >
      <SidebarContent />
    </aside>
  );
};

export default DesktopSidebar;
