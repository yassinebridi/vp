import create from "zustand";

type SideBarState = {
  sidebarProps: {
    open: boolean;
  };
  setSidebarProps: (open: boolean) => void;
};
export const useSidebarStore = create<SideBarState>((set) => ({
  sidebarProps: { open: false },
  setSidebarProps: (open) => {
    set(() => ({
      sidebarProps: {
        open,
      },
    }));
  },
}));
