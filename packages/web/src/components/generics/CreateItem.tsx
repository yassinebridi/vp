import { CreateBrand } from "@components";
import { usePageState } from "@utils";
import React from "react";

export interface CreateItemProps {}
const CreateItem: React.FC<CreateItemProps> = () => {
  const { component } = usePageState();

  //These data arrays are much cleaner, and easier for the genom package(local package) to inject new code
  const items = [
    {
      name: "brands",
      jsx: <CreateBrand />,
    },
  ];
  return <>{items.find((item) => item.name === component).jsx}</>;
};

export default CreateItem;
