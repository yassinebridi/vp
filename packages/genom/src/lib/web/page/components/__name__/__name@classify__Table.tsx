import {
  <%=classify(name)%>Query,
  useRemove<%=singular(classify(name))%>Mutation,
  useUpdate<%=singular(classify(name))%>Mutation,
} from "@adapters";
import { ColumnActions, Table } from "@components";
import { ActionKindType, formatDate, usePageState } from "@utils";
import React from "react";

export interface <%=classify(name)%>TableProps {
  <%=name%>: <%=classify(name)%>Query;
}
const <%=classify(name)%>Table: React.FC<<%=classify(name)%>TableProps> = ({ <%=name%> }) => {
  const { isTrash } = usePageState();

  const {
    mutateAsync: update<%=singular(classify(name))%>MutateAsync,
    isLoading: isUpdate<%=singular(classify(name))%>Loading,
  } = useUpdate<%=singular(classify(name))%>Mutation();
  const {
    mutateAsync: remove<%=singular(classify(name))%>MutateAsync,
    isLoading: isRemove<%=singular(classify(name))%>Loading,
  } = useRemove<%=singular(classify(name))%>Mutation();

  const isLoading = isTrash ? isRemove<%=singular(classify(name))%>Loading : isUpdate<%=singular(classify(name))%>Loading;

  const handleAsyncRemove = async (
    id: string,
    type: ActionKindType
  ): Promise<boolean> => {
    if (isTrash && type === "remove") {
      const res = await remove<%=singular(classify(name))%>MutateAsync({ where<%=singular(classify(name))%>Input: { id } });
      if (res.remove<%=singular(classify(name))%>) {
        return true;
      } else {
        return false;
      }
    } else if (isTrash && type === "restore") {
      const res = await update<%=singular(classify(name))%>MutateAsync({
        where: { id },
        data: {
          isTrash: {
            set: false,
          },
        },
      });
      if (res.update<%=singular(classify(name))%>) {
        return true;
      } else {
        return false;
      }
    } else {
      const res = await update<%=singular(classify(name))%>MutateAsync({
        where: { id },
        data: {
          isTrash: {
            set: true,
          },
        },
      });
      if (res.update<%=singular(classify(name))%>) {
        return true;
      } else {
        return false;
      }
    }
  };
  let dataArray: {
    id: string;
    name: string;
    products: number;
    date: string;
  }[] = [];
  <%=name%>.getAll<%=classify(name)%> &&
    <%=name%>.getAll<%=classify(name)%>.nodes.map((<%=singular(name)%>) => {
      dataArray.push({
        id: <%=singular(name)%>.id,
        name: <%=singular(name)%>.name,
        products: <%=singular(name)%>.products.length,
        date: <%=singular(name)%>.createdAt,
      });
    });

  const columnsArray = [
    {
      Header: "Name",
      accessor: "name",
      width: "20%",
      kind: "string",
      Cell: (props) => {
        return (
          <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md">
            {props.cell.value}
          </span>
        );
      },
    },
    {
      Header: "Products",
      accessor: "products",
      kind: "number",
      width: "20%",
    },
    {
      Header: "Date",
      accessor: "date",
      kind: "date",
      Cell: (props) => formatDate(props.cell.value),
    },
    {
      Header: "actions",
      accessor: "actions",
      kind: "string",
      width: "6%",
      disableSortBy: true,
      Cell: (props) => {
        return (
          <ColumnActions
            id={props.cell.row.original.id}
            handleAsyncRemove={handleAsyncRemove}
            isLoading={isLoading}
          />
        );
      },
    },
  ];
  const hiddenColumnsArray = [];

  return (
    <Table
      dataArray={dataArray}
      columnsArray={columnsArray}
      hiddenColumnsArray={hiddenColumnsArray}
    />
  );
};

export default <%=classify(name)%>Table;
