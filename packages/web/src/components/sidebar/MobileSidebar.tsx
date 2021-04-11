import { Backdrop } from "@design-system";
import { Transition } from "@headlessui/react";
import { useSidebarStore } from "@utils";
import React from "react";
import SidebarContent from "./SidebarContent";

export interface MobileSidebarProps {}
const MobileSidebar: React.FC<MobileSidebarProps> = () => {
  const { setSidebarProps, sidebarProps } = useSidebarStore();

  return (
    <Transition
      show={sidebarProps.open}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Backdrop onClick={() => setSidebarProps(false)} />

      <aside className="fixed bg-gray-100 inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-850 lg:hidden">
        <SidebarContent />
      </aside>
    </Transition>
  );
};

export default MobileSidebar;
