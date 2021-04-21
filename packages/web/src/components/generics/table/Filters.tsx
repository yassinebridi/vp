import React from "react";

export type KindType = "string" | "number" | "date";
export interface FiltersProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  stringState: string;
  setStringState: React.Dispatch<React.SetStateAction<string>>;
  kind: KindType;
  handleDone: () => void;
}
const Filters: React.FC<FiltersProps> = ({
  kind,
  inputValue,
  setInputValue,
  stringState,
  setStringState,
  handleDone,
}) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleValueChange = (e) => {
    if (kind === "string") {
      setStringState(e.target.value);
    }
  };

  const formSubmit = () => {
    event.preventDefault();
    handleDone();
  };
  return (
    <>
      {kind === "string" ? (
        <form className="flex flex-col space-y-2" onSubmit={formSubmit}>
          <label className="inline-flex items-center space-x-4">
            <input
              className="text-purple-500 form-radio dark:text-gray-500 dark:bg-gray-500"
              type="radio"
              value="is"
              name="filter"
              checked={stringState === "is"}
              onChange={handleValueChange}
            />
            <span className="text-gray-600 dark:text-gray-300">is</span>
          </label>
          {stringState === "is" && (
            <FilterInput
              inputValue={inputValue}
              handleInputChange={handleInputChange}
            />
          )}
          <label className="inline-flex items-center space-x-4">
            <input
              className="text-purple-500 form-radio dark:text-gray-500 dark:bg-gray-500"
              type="radio"
              value="is not"
              name="filter"
              checked={stringState === "is not"}
              onChange={handleValueChange}
            />
            <span className="text-gray-600 dark:text-gray-300">is not</span>
          </label>
          {stringState === "is not" && (
            <FilterInput
              inputValue={inputValue}
              handleInputChange={handleInputChange}
            />
          )}
          <label className="inline-flex items-center space-x-4">
            <input
              className="text-purple-500 form-radio dark:text-gray-500 dark:bg-gray-500"
              type="radio"
              value="contains"
              name="filter"
              checked={stringState === "contains"}
              onChange={handleValueChange}
            />
            <span className="text-gray-600 dark:text-gray-300">contains</span>
          </label>
          {stringState === "contains" && (
            <FilterInput
              inputValue={inputValue}
              handleInputChange={handleInputChange}
            />
          )}
        </form>
      ) : kind === "number" ? (
        <div>number</div>
      ) : kind === "date" ? (
        <div>daaate</div>
      ) : null}
    </>
  );
};

export default Filters;

interface FilterInputProps {
  inputValue: string;
  handleInputChange: (e: any) => void;
}
const FilterInput: React.FC<FilterInputProps> = ({
  inputValue,
  handleInputChange,
}) => {
  return (
    <input
      value={inputValue}
      onChange={handleInputChange}
      className="px-4 py-2 bg-white outline-none rounded-md dark:text-gray-200 dark:bg-gray-900 ringify"
      placeholder="Some value"
    />
  );
};
