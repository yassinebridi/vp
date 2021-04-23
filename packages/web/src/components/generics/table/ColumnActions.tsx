import { useDisclosure, useToast } from "@chakra-ui/react";
import { MyDialog, UpdateItem } from "@components";
import { RestoreIcon } from "@design-system";
import { Popover, Transition } from "@headlessui/react";
import {
  DotsHorizontalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { ActionKindType, usePageState } from "@utils";
import React from "react";
import { useQueryClient } from "react-query";

export interface ColumnActionsProps {
  id: string;
  handleAsyncRemove: (id: string, type: ActionKindType) => Promise<boolean>;
  isLoading: boolean;
}
const ColumnActions: React.FC<ColumnActionsProps> = ({
  id,
  handleAsyncRemove,
  isLoading,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isOpen: isDrawerOpen, onOpen, onClose } = useDisclosure();
  const { component, countComponent, isTrash } = usePageState();
  const queryClient = useQueryClient();
  const toast = useToast();

  const [actionKind, setActionKind] = React.useState<ActionKindType>();
  const handleDone = async () => {
    try {
      const res = await handleAsyncRemove(id, actionKind);
      if (res) {
        queryClient.resetQueries({ queryKey: [component] });
        queryClient.resetQueries({ queryKey: [countComponent] });
        toast({
          position: "bottom-right",
          title: "The product has been deleted successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        position: "bottom-right",
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const handleRemove = () => {
    setIsOpen(true);
    setActionKind("remove");
  };
  const handleRestore = () => {
    setIsOpen(true);
    setActionKind("restore");
  };

  return (
    <Popover as="div" className="relative inline-block">
      {({ open }) => (
        <>
          {/* TODO:Title To translate */}
          <Popover.Button
            title="Actions"
            className="inline-flex justify-center w-full p-3 text-sm font-medium hover:bg-gray-100 active:bg-gray-200 active:shadow-lg rounded-md dark:hover:bg-gray-800 dark:active:bg-gray-850 ringify"
          >
            <DotsHorizontalIcon className="w-5 h-5" />
          </Popover.Button>

          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel
              static
              className="absolute right-0 z-40 w-32 py-2 space-y-1 mt-2 bg-white shadow-2xl origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#2b2a2f]"
            >
              <div
                className="flex px-4 py-2 text-sm text-gray-800 cursor-pointer space-x-2 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={handleRemove}
              >
                <TrashIcon className="w-5 h-5" />
                <span>{isTrash ? "Remove" : "Trash"}</span>
              </div>
              {isTrash && (
                <div
                  className="flex px-4 py-2 text-sm text-gray-800 cursor-pointer space-x-2 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={handleRestore}
                >
                  <RestoreIcon cn="w-5 h-5 text-gray-800 dark:text-gray-300" />
                  <span>Restore</span>
                </div>
              )}
              <div
                className="flex px-4 py-2 text-sm text-gray-800 cursor-pointer space-x-2 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={onOpen}
              >
                <PencilAltIcon className="w-5 h-5 text-gray-800 dark:text-gray-300" />
                <span>Update</span>
              </div>
            </Popover.Panel>
          </Transition>
          {/* TODO: Translate this */}
          {isOpen && (
            <MyDialog
              width="max-w-sm"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              handleDone={handleDone}
              handleCancel={() => null}
              title={
                actionKind === "remove"
                  ? "Removing an item"
                  : actionKind === "restore"
                  ? "Restoring an item"
                  : null
              }
              actionButton={{
                title:
                  actionKind === "remove"
                    ? "Remove"
                    : actionKind === "restore"
                    ? "Restore"
                    : null,
                cs:
                  actionKind === "remove"
                    ? "bg-red-500 hover:bg-red-400 active:bg-red-600"
                    : actionKind === "restore"
                    ? "bg-blue-500 hover:bg-blue-400 active:bg-blue-600"
                    : null,
                isLoading,
              }}
            >
              Are you sure you want to {actionKind} this item
            </MyDialog>
          )}

          <UpdateItem isOpen={isDrawerOpen} onClose={onClose} id={id} />
        </>
      )}
    </Popover>
  );
};

export default ColumnActions;
