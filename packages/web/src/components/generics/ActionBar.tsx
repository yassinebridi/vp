import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
} from "@chakra-ui/react";
import { SpinnerIcon } from "@design-system";
import clsx from "clsx";
import React from "react";

export interface ActionBarProps {
  buttonText?: string;
  buttonClasses?: string;
  withButton: boolean;
  icon?: any;
  headerText: string;
  type: "update" | "create";
  isLoading: boolean;
  size?: DrawerProps["size"];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  onOpen?: () => void;
  isOpen: boolean;
}
const ActionBar: React.FC<ActionBarProps> = ({
  withButton,
  buttonText,
  buttonClasses,
  headerText,
  type,
  icon,
  isLoading,
  size,
  onSubmit,
  onClose,
  onOpen,
  isOpen,
  children,
}) => {
  const btnRef = React.useRef();

  return (
    <>
      {withButton && (
        <button ref={btnRef} onClick={onOpen} className={buttonClasses}>
          {icon && icon}
          {buttonText && buttonText}
        </button>
      )}
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        size={size || "xs"}
        finalFocusRef={btnRef}
        closeOnOverlayClick={false}
      >
        <DrawerOverlay>
          <DrawerContent overflowY="auto">
            <DrawerCloseButton className="right-3 dark:text-white" />
            <DrawerHeader
              fontSize="lg"
              className="text-gray-800 dark:text-gray-100"
            >
              {headerText}
            </DrawerHeader>

            <form
              onSubmit={onSubmit}
              className="flex flex-col justify-between h-full"
            >
              <DrawerBody color="white" className="text-white">
                {children}
              </DrawerBody>

              <DrawerFooter>
                <div className="flex w-full space-x-2">
                  <button
                    type="button"
                    className="flex items-center justify-center px-3 py-2 text-sm font-bold text-white bg-gray-400 rounded-lg space-x-2 ringify active:bg-gray-700 hover:bg-gray-500 dark:active:bg-gray-800 dark:hover:bg-gray-500 dark:bg-gray-600"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={clsx(
                      "flex items-center justify-center w-full px-3 py-2 text-sm font-bold text-white rounded-lg space-x-2 ringify ",
                      type === "create"
                        ? "bg-blue-600 active:bg-blue-700 hover:bg-blue-500 dark:active:bg-blue-800 dark:hover:bg-blue-600 dark:bg-blue-700"
                        : "bg-yellow-600 active:bg-yellow-700 hover:bg-yellow-500 dark:active:bg-yellow-800 dark:hover:bg-yellow-600 dark:bg-yellow-700"
                    )}
                  >
                    {isLoading && <SpinnerIcon cn="h-4 w-4" />}
                    <span>{type === "create" ? "Create" : "Update"}</span>
                  </button>
                </div>
              </DrawerFooter>
            </form>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default ActionBar;
