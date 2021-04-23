import { NewBrand } from "@components";
import { usePageState } from "@utils";
import React from "react";

export interface NewItemProps {}
const NewItem: React.FC<NewItemProps> = () => {
  const { component } = usePageState();

  return <>{component === "brands" ? <NewBrand /> : null}</>;
};

export default NewItem;
