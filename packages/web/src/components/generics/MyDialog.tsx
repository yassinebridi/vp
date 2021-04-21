import { SpinnerIcon } from "@design-system";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import { useHistory } from "react-router";

type ActionButtonType = {
  title: string;
  cs?: string;
  isLoading?: boolean;
};
export interface MyDialogProps {
  width?: "max-w-xs" | "max-w-sm" | "max-w-md" | "max-w-lg";
  title: string;
  isOpen: boolean;
  handleCancel: () => void;
  handleDone: () => void;
  actionButton: ActionButtonType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MyDialog: React.FC<MyDialogProps> = ({
  width,
  title,
  isOpen,
  setIsOpen,
  handleCancel,
  handleDone,
  actionButton,
  children,
}) => {
  const history = useHistory();
  const cancelButtonRef = React.useRef();

  // Close the dialog on every route change
  React.useEffect(() => {
    return history.listen(() => {
      setIsOpen(false);
    });
  }, [history, setIsOpen]);

  const handleCancelFn = () => {
    handleCancel();
    setIsOpen(false);
  };
  const handleDoneFn = () => {
    handleDone();
    setIsOpen(false);
  };
  return (
    <Transition as={React.Fragment} show={isOpen}>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        as="div"
        id="modal"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={cancelButtonRef}
        static
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={clsx(
                "inline-block w-full p-6 my-8 overflow-hidden text-left align-middle bg-white shadow-xl dark:bg-gray-700 transition-all transform rounded-2xl",
                width ? width : "max-w-xs"
              )}
            >
              <Dialog.Title
                as="h3"
                className="text-lg font-medium dark:text-gray-100 leading-6"
              >
                {title}
              </Dialog.Title>
              <div className="my-4 text-gray-600 dark:text-gray-200">
                {children}
              </div>

              <div className="flex justify-between mt-4 space-x-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-semibold text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-300 active:bg-gray-500 ringify dark:active:bg-gray-800 dark:hover:bg-[#4d4d4e] dark:bg-gray-600"
                  onClick={handleCancelFn}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={clsx(
                    "inline-flex justify-center px-4 py-2 text-sm font-semibold text-white border border-transparent rounded-md ringify",
                    actionButton.cs
                      ? actionButton.cs
                      : "bg-purple-500 hover:bg-purple-400 active:bg-purple-600",
                    width === "max-w-xs" ? "w-full" : null
                  )}
                  onClick={handleDoneFn}
                >
                  {actionButton.isLoading && <SpinnerIcon cn="h-5 w-5" />}
                  {actionButton.title}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MyDialog;
