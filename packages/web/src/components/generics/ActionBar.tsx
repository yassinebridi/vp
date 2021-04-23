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
import React from "react";

export interface ActionBarProps {
  headerText: string;
  buttonText: string;
  icon: any;
  isLoading: boolean;
  size?: DrawerProps["size"];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}
const ActionBar: React.FC<ActionBarProps> = ({
  headerText,
  buttonText,
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
      <button
        ref={btnRef}
        onClick={onOpen}
        className="text-white bg-purple-500 rounded-full hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      >
        {icon && icon}
        {buttonText && buttonText}
      </button>
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
                    className="flex items-center justify-center w-full px-3 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg space-x-2 ringify active:bg-blue-700 hover:bg-blue-500 dark:active:bg-blue-800 dark:hover:bg-blue-600 dark:bg-blue-700"
                  >
                    {isLoading && <SpinnerIcon cn="h-4 w-4" />}
                    <span>Create</span>
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
