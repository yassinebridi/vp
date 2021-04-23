import {
  BrandsQuery,
  useRemoveBrandMutation,
  useUpdateBrandMutation,
} from "@adapters";
import { ColumnActions, Table } from "@components";
import { ActionKindType, formatDate, usePageState } from "@utils";
import React from "react";

export interface BrandsTableProps {
  brands: BrandsQuery;
}
const BrandsTable: React.FC<BrandsTableProps> = ({ brands }) => {
  const { isTrash } = usePageState();

  const {
    mutateAsync: updateBrandMutateAsync,
    isLoading: isUpdateBrandLoading,
  } = useUpdateBrandMutation();
  const {
    mutateAsync: removeBrandMutateAsync,
    isLoading: isRemoveBrandLoading,
  } = useRemoveBrandMutation();

  const isLoading = isTrash ? isRemoveBrandLoading : isUpdateBrandLoading;

  const handleAsyncRemove = async (
    id: string,
    type: ActionKindType
  ): Promise<boolean> => {
    if (isTrash && type === "remove") {
      const res = await removeBrandMutateAsync({ whereBrandInput: { id } });
      if (res.removeBrand) {
        return true;
      } else {
        return false;
      }
    } else if (isTrash && type === "restore") {
      const res = await updateBrandMutateAsync({
        where: { id },
        data: {
          isTrash: {
            set: false,
          },
        },
      });
      if (res.updateBrand) {
        return true;
      } else {
        return false;
      }
    } else {
      const res = await updateBrandMutateAsync({
        where: { id },
        data: {
          isTrash: {
            set: true,
          },
        },
      });
      if (res.updateBrand) {
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
  brands.getAllBrands &&
    brands.getAllBrands.nodes.map((brand) => {
      dataArray.push({
        id: brand.id,
        name: brand.name,
        products: brand.products.length,
        date: brand.createdAt,
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

export default BrandsTable;
