import { Button, ButtonProps } from "@chakra-ui/react";
import clsx from "clsx";
import React from "react";

export type MyButtonProps = ButtonProps & {
  className?: string;
};
const MyButton: React.FC<MyButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Button className={clsx(className, "ringify")} {...props}>
      {children}
    </Button>
  );
};

export default MyButton;
