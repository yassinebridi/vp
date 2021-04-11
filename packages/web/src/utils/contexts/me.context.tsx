import { MeQuery } from "@adapters";
import React from "react";

type MeContextType = {
  meData: MeQuery;
};
export const MeContext = React.createContext<MeContextType>(
  {} as MeContextType
);

export const useMe = () => React.useContext(MeContext);

export interface MeProps {
  me: MeQuery;
}
const MeProvider: React.FC<MeProps> = ({ me, children }) => {
  return (
    <MeContext.Provider value={{ meData: me }}>{children}</MeContext.Provider>
  );
};

export default MeProvider;
