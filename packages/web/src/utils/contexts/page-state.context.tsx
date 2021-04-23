import React from "react";

type PageStateContextType = {
  component: string;
  countComponent: string;
  isTrash: boolean;
};
export const PageStateContext = React.createContext<PageStateContextType>(
  {} as PageStateContextType
);

export const usePageState = () => React.useContext(PageStateContext);

export interface PageStateProps {
  component: string;
  countComponent: string;
  isTrash: boolean;
}
const PageStateProvider: React.FC<PageStateProps> = ({
  component,
  countComponent,
  isTrash,
  children,
}) => {
  return (
    <PageStateContext.Provider value={{ component, countComponent, isTrash }}>
      {children}
    </PageStateContext.Provider>
  );
};

export default PageStateProvider;
