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
        "z-30 flex-shrink-0 hidden lg:block",
        expandSidebarProps.expand && `w-64`
      )}
    >
      <SidebarContent />
    </aside>
  );
};

export default DesktopSidebar;
