import { UpdateBrand } from "@components";
import { usePageState } from "@utils";
import React from "react";

export interface UpdateItemProps {
  id: string;
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}
const UpdateItem: React.FC<UpdateItemProps> = ({
  id,
  onClose,
  onOpen,
  isOpen,
}) => {
  const { component } = usePageState();

  return (
    <>
      {component === "brands" ? (
        <UpdateBrand
          id={id}
          onClose={onClose}
          onOpen={onOpen}
          isOpen={isOpen}
        />
      ) : null}
    </>
  );
};

export default UpdateItem;
