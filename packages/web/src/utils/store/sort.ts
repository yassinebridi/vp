import create from "zustand";

type SortState = {
  sortProps: {
    open: boolean;
    number: number;
  };
  setSortProps: (open?: boolean, number?: number) => void;
};
export const useSortStore = create<SortState>((set) => ({
  sortProps: { open: false, number: 0 },
  setSortProps: (open, number) => {
    set(() => ({
      sortProps: {
        open,
        number,
      },
    }));
  },
}));
