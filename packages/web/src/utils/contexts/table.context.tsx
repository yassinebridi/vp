import { useQueryParams } from "@utils";
import React from "react";

type TableContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  columns: any[];
  setColumns: React.Dispatch<React.SetStateAction<any[]>>;
  tableState: any;
  setTableState: React.Dispatch<React.SetStateAction<any>>;
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
  const [tableState, setTableState] = React.useState();

  return (
    <TableContext.Provider
      value={{
        searchValue,
        setSearchValue,
        columns,
        setColumns,
        tableState,
        setTableState,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
