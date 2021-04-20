import { BrandsQuery } from "@adapters";
import { Table } from "@components";
import { formatDate } from "@utils";
import React from "react";

export interface BrandsTableProps {
  brands: BrandsQuery;
}
const BrandsTable: React.FC<BrandsTableProps> = ({ brands }) => {
  let dataArray: {
    id: string;
    name: string;
    products: number;
    date: string;
  }[] = [];
  brands.getAllBrands &&
    brands.getAllBrands.map((brand) => {
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
    },
    {
      Header: "Date",
      accessor: "date",
      Cell: (props) => formatDate(props.cell.value),
    },
  ];
  const hiddenColumnsArray = [];

  return (
    <>
      <Table
        dataArray={dataArray}
        columnsArray={columnsArray}
        hiddenColumnsArray={hiddenColumnsArray}
      />
    </>
  );
};

export default BrandsTable;
