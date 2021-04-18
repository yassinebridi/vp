import clsx from "clsx";
import React from "react";

export const IndeterminateCheckbox = React.forwardRef<
  HTMLInputElement,
  { indeterminate: any; cs: string }
>(({ indeterminate, cs, ...rest }, ref) => {
  const defaultRef = React.useRef<HTMLInputElement>();
  const resolvedRef = (ref ||
    defaultRef) as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input
        type="checkbox"
        className={clsx(
          "form-checkbox ringify h-5 p-1 w-5 text-purple-500 dark:bg-gray-500 rounded-md"
        )}
        ref={resolvedRef}
        {...rest}
      />
    </>
  );
});
