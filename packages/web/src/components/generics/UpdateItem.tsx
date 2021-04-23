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

  return (
    <>
      {component === "brands" ? (
        <UpdateBrand id={id} onClose={onClose} isOpen={isOpen} />
      ) : null}
    </>
  );
};

export default UpdateItem;
