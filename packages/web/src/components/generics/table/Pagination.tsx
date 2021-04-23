import { PageSizeSelect } from "@components";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { paginate, usePageState } from "@utils";
import clsx from "clsx";
import React from "react";
import { useQueryClient } from "react-query";
import { useQueryParam } from "use-query-params";

export interface PaginationProps {
  isLoading: boolean;
  paginator: ReturnType<typeof paginate>;
}
const Pagination: React.FC<PaginationProps> = ({ isLoading, paginator }) => {
  const { component } = usePageState();
  const queryClient = useQueryClient();
  const [_, setPageNo] = useQueryParam("pageNo");

  const handleNext = () => {
    setPageNo(paginator.nextPage, "pushIn");
    queryClient.resetQueries({ queryKey: [component] });
  };
  const handlePrev = () => {
    setPageNo(paginator.prevPage, "pushIn");
    queryClient.resetQueries({ queryKey: [component] });
  };

  return (
    <div className="flex items-center justify-between min-w-full px-6 my-3 mt-6 text-sm space-x-6 dark:text-gray-300">
      {isLoading ? (
        <span>loading..</span>
      ) : (
        <span>
          {paginator.startIndex + 1} <span className="text-gray-400">-</span>{" "}
          {paginator.endIndex + 1} <span className="text-gray-400">of</span>{" "}
          {paginator.totalItems + 1}
        </span>
      )}

      <div>
        <PageSizeSelect />
      </div>

      <div className="flex items-center space-x-4">
        <button
          disabled={!paginator.hasPrev}
          className={clsx(
            "disabled:opacity-50 disabled:cursor-not-allowed ringify"
          )}
          onClick={handlePrev}
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        {isLoading ? (
          <span>loading..</span>
        ) : (
          <span>
            {paginator.currentPage} of {paginator.totalPages}
          </span>
        )}
        <button
          disabled={!paginator.hasNext}
          className={clsx(
            "disabled:opacity-50 disabled:cursor-not-allowed ringify"
          )}
          onClick={handleNext}
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
