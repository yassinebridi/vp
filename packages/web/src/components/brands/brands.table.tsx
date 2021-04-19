import { BrandsQuery } from "@adapters";
import { Table } from "@components";
import { formatDate } from "@utils";
import React from "react";

export interface BrandsTableProps {
  brands: BrandsQuery;
}
const BrandsTable: React.FC<BrandsTableProps> = ({ brands }) => {
  let dataArray: { name: string; products: number; date: string }[] = [];
  brands.getAllBrands &&
    brands.getAllBrands.map((brand) => {
      dataArray.push({
        name: brand.name,
        products: brand.products.length,
        date: formatDate(brand.createdAt),
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
    },
  ];

  return (
    <>
      <Table dataArray={dataArray} columnsArray={columnsArray} />
    </>
  );
};

export default BrandsTable;
