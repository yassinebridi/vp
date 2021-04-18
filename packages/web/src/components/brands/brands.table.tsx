import { useBrandsQuery } from "@adapters";
import { Table } from "@components";
import { formatDate } from "@utils";
import React from "react";

export interface BrandsTableProps {}
const BrandsTable: React.FC<BrandsTableProps> = () => {
  const { data: brandsData, isLoading } = useBrandsQuery();

  if (isLoading) return <div>loading</div>;
  if (brandsData.getAllBrands.length === 0) return <div>no items</div>;

  let dataArray: { name: string; products: number; date: string }[] = [];
  brandsData.getAllBrands &&
    brandsData.getAllBrands.map((brand) => {
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
    <div>
      <Table dataArray={dataArray} columnsArray={columnsArray} />
    </div>
  );
};

export default BrandsTable;
