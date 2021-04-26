import { UpdateBrand } from "@components";
import { usePageState } from "@utils";
import React from "react";

export interface UpdateItemProps {
  id: string;
  onClose: () => void;
  isOpen: boolean;
}
const UpdateItem: React.FC<UpdateItemProps> = ({ id, onClose, isOpen }) => {
  const { component } = usePageState();

  //These data arrays are much cleaner, and easier for the genom package(local package) to inject new code
  const items = [
    {
      name: "brands",
      jsx: <UpdateBrand id={id} onClose={onClose} isOpen={isOpen} />,
    },
  ];

  return <>{items.find((item) => item.name === component).jsx}</>;
};

export default UpdateItem;
