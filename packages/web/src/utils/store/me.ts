import { MeQuery } from "@adapters";
import create from "zustand";

type meState = {
  me: MeQuery["me"];
  setMe: (user: MeQuery["me"]) => void;
};
export const useMeStore = create<meState>((set) => ({
  me: null,
  setMe: (user) => {
    set(() => ({
      me: user,
    }));
  },
}));
