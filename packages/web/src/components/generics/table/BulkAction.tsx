import { useTableContext } from "@utils";
import React from "react";

export interface BulkActionProps {}
const BulkAction: React.FC<BulkActionProps> = () => {
  const { tableState, tableActions } = useTableContext();
  const tableStateReady = tableState !== undefined;
  const selectedRowsSize =
    (tableStateReady && Object.keys(tableState.selectedRowIds).length) || 0;
  if (!tableStateReady || selectedRowsSize === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-between px-6 py-4 bg-purple-500 transition transform origin-top-right dark:bg-[#2e2d33]">
      <div className="flex items-center space-x-4">
        <span className="flex items-center space-x-2">
          <span className="font-bold">
            {Object.keys(tableState.selectedRowIds).length}
          </span>
          <span className="text-sm text-gray-200">selected</span>
        </span>
        <button
          onClick={() => tableActions.toggleAllRowsSelected(false)}
          className="px-3 py-2 text-sm font-bold rounded-lg ringify dark:active:bg-gray-850 dark:hover:bg-gray-600 dark:bg-gray-700"
        >
          Deselect
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-2 text-sm font-bold rounded-lg ringify dark:active:bg-red-800 dark:hover:bg-red-600 dark:bg-red-700">
          Trash
        </button>
      </div>
    </div>
  );
};

export default BulkAction;
