import create from "zustand";

type ExpandSideBarState = {
  expandSidebarProps: {
    expand: boolean;
  };
  setExpandSidebarProps: (expand: boolean) => void;
};
export const useExpandSidebarStore = create<ExpandSideBarState>((set) => ({
  expandSidebarProps: { expand: true },
  setExpandSidebarProps: (expand) => {
    set(() => ({
      expandSidebarProps: {
        expand,
      },
    }));
  },
}));
