import {
  Button,
  ButtonProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  useDisclosure,
} from "@chakra-ui/react";
import { MyButton } from "@components";
import React from "react";

export interface ActionBarProps {
  buttonText: string;
  headerText: string;
  isLoading: boolean;
  openButtonProps?: ButtonProps & { className?: string };
  size?: DrawerProps["size"];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const ActionBar: React.FC<ActionBarProps> = ({
  buttonText,
  headerText,
  isLoading,
  openButtonProps,
  size,
  onSubmit,
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} {...openButtonProps}>
        {buttonText}
      </Button>
      <Drawer
        isOpen={isOpen}
        size={size || "xs"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent overflowY="auto">
            <DrawerCloseButton className="right-3" />
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
                <MyButton
                  variant="outline"
                  className="ringify"
                  px={8}
                  onClick={onClose}
                >
                  Cancel
                </MyButton>
                <MyButton
                  type="submit"
                  w="full"
                  isLoading={isLoading}
                  colorScheme="blue"
                >
                  Save
                </MyButton>
              </DrawerFooter>
            </form>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default ActionBar;
