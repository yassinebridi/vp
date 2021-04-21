import { Dialog, Transition } from "@headlessui/react";
import React from "react";

export interface MyDialogProps {
  title: string;
  isOpen: boolean;
  handleCancel: () => void;
  handleDone: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MyDialog: React.FC<MyDialogProps> = ({
  title,
  isOpen,
  setIsOpen,
  handleCancel,
  handleDone,
  children,
}) => {
  const cancelButtonRef = React.useRef();

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
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle shadow-xl dark:bg-gray-700 transition-all transform rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium dark:text-gray-100 leading-6"
              >
                {title}
              </Dialog.Title>
              <div className="mt-2">{children}</div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="px-3 py-2 text-sm font-bold text-white bg-purple-700 rounded-lg hover:bg-purple-600 active:bg-purple-800 ringify dark:active:bg-gray-800 dark:hover:bg-[#4d4d4e] dark:bg-gray-600"
                  onClick={handleCancelFn}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-semibold text-white bg-purple-500 border border-transparent rounded-md hover:bg-purple-400 active:bg-purple-600 ringify"
                  onClick={handleDoneFn}
                >
                  Apply filters
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
