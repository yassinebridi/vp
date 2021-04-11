import create from "zustand";

type ProfileState = {
  profileProps: {
    open: boolean;
  };
  setProfileProps: (open: boolean) => void;
};
export const useProfileStore = create<ProfileState>((set) => ({
  profileProps: { open: false },
  setProfileProps: (open) => {
    set(() => ({
      profileProps: {
        open,
      },
    }));
  },
}));
