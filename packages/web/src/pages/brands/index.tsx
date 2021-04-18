import { PageHeader, Table } from "@components";
import React from "react";

export interface BrandsPageProps {}
const BrandsPage: React.FC<BrandsPageProps> = () => {
  return (
    <div className="px-6 py-6">
      <PageHeader title="Brands" />
      <div className="mt-6">
        <Table />
      </div>
    </div>
  );
};

export default BrandsPage;
