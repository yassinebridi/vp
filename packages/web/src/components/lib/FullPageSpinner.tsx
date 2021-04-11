import { Spinner } from "@chakra-ui/react";
import React from "react";

export interface FullPageSpinnerProps {}
const FullPageSpinner: React.FC<FullPageSpinnerProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-blue-900 bg-gray-100 dark:bg-gray-800 dark:text-blue-100">
      <Spinner />
    </div>
  );
};

export default FullPageSpinner;
