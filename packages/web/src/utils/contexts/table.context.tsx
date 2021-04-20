import { useQueryParams } from "@utils";
import React from "react";

type SelectedRowIdsType = {
  [key: number]: boolean;
};
type TableStateType = {
  hiddenColumns: string[];
  selectedRowIds: SelectedRowIdsType;
  sortBy: any[];
};
type TableActionsType = {
  toggleAllRowsSelected: (set: boolean) => void;
};
type TableContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  columns: any[];
  setColumns: React.Dispatch<React.SetStateAction<any[]>>;
  tableState: TableStateType;
  setTableState: React.Dispatch<React.SetStateAction<TableStateType>>;
  tableActions: TableActionsType;
  setTableActions: React.Dispatch<React.SetStateAction<TableActionsType>>;
};
export const TableContext = React.createContext<TableContextType>(
  {} as TableContextType
);

export const useTableContext = () => React.useContext(TableContext);

export interface TableProps {}
const TableProvider: React.FC<TableProps> = ({ children }) => {
  const query = useQueryParams();
  const searchTerm = query.get("search");

  const [searchValue, setSearchValue] = React.useState(
    searchTerm ? searchTerm : undefined
  );

  const [columns, setColumns] = React.useState([]);
  const [tableState, setTableState] = React.useState<TableStateType>();
  const [selectedIds, setSelectedIds] = React.useState<string[]>();
  const [tableActions, setTableActions] = React.useState<TableActionsType>();

  return (
    <TableContext.Provider
      value={{
        searchValue,
        setSearchValue,
        columns,
        setColumns,
        tableState,
        setTableState,
        tableActions,
        setTableActions,
        selectedIds,
        setSelectedIds,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
