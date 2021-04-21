import create from "zustand";

type FilterState = {
  filterProps: {
    open: boolean;
    number: number;
  };
  setFilterProps: (open?: boolean, number?: number) => void;
};
export const useFilterStore = create<FilterState>((set) => ({
  filterProps: { open: false, number: 0 },
  setFilterProps: (open, number) => {
    set(() => ({
      filterProps: {
        open,
        number,
      },
    }));
  },
}));
