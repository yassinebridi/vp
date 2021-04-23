import { useToast } from "@chakra-ui/react";
import { MyDialog } from "@components";
import { ActionKindType, usePageState, useTableContext } from "@utils";
import React from "react";
import { useQueryClient } from "react-query";

export interface BulkActionProps {
  bulkAction?: boolean;
  handleAsyncRemove: (
    selectedIds: string[],
    type: ActionKindType
  ) => Promise<boolean>;
  isLoading: boolean;
}
const BulkAction: React.FC<BulkActionProps> = ({
  handleAsyncRemove,
  isLoading,
}) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const [isOpen, setIsOpen] = React.useState(false);
  const [actionKind, setActionKind] = React.useState<ActionKindType>();
  const { component, countComponent, isTrash } = usePageState();
  const { tableState, tableActions, selectedIds } = useTableContext();

  const handleDone = async () => {
    try {
      const res = await handleAsyncRemove(selectedIds, actionKind);
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
  const tableStateReady = tableState !== undefined;
  const selectedRowsSize =
    (tableStateReady && Object.keys(tableState.selectedRowIds).length) || 0;
  if (!tableStateReady || selectedRowsSize === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-between px-6 py-4 bg-purple-500 transition transform origin-top-right dark:bg-[#2e2d33]">
      <div className="flex items-center space-x-4">
        <span className="flex items-center text-white space-x-2 dark:text-gray-200">
          <span className="font-bold">
            {Object.keys(tableState.selectedRowIds).length}
          </span>
          <span className="text-sm">selected</span>
        </span>
        <button
          onClick={() => tableActions.toggleAllRowsSelected(false)}
          className="px-3 py-2 text-sm font-bold text-white bg-purple-700 rounded-lg hover:bg-purple-600 active:bg-purple-800 ringify dark:active:bg-gray-850 dark:hover:bg-gray-600 dark:bg-gray-700"
        >
          Deselect
        </button>
      </div>
      <div className="flex items-center space-x-2">
        {isTrash && (
          <button
            onClick={handleRestore}
            className="px-3 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg ringify active:bg-blue-700 hover:bg-blue-500 dark:active:bg-blue-800 dark:hover:bg-blue-600 dark:bg-blue-700"
          >
            Restore
          </button>
        )}
        <button
          onClick={handleRemove}
          className="px-3 py-2 text-sm font-bold text-white bg-red-600 rounded-lg ringify active:bg-red-700 hover:bg-red-500 dark:active:bg-red-800 dark:hover:bg-red-600 dark:bg-red-700"
        >
          {isTrash ? "Remove" : "Trash"}
        </button>
      </div>

      {isOpen && (
        <MyDialog
          width="max-w-sm"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleDone={handleDone}
          handleCancel={() => null}
          title={
            actionKind === "remove"
              ? "Removing some item"
              : actionKind === "restore"
              ? "Restoring some item"
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
          Are you sure you want to {actionKind} thes item
        </MyDialog>
      )}
    </div>
  );
};

export default BulkAction;
