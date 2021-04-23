import { CreateBrand } from "@components";
import { usePageState } from "@utils";
import React from "react";

export interface CreateItemProps {}
const CreateItem: React.FC<CreateItemProps> = () => {
  const { component } = usePageState();

  return <>{component === "brands" ? <CreateBrand /> : null}</>;
};

export default CreateItem;
