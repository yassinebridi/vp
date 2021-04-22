import { CLOUDINARY_NAME } from "@vp/common";
import * as dayjs from "dayjs";
import qs from "qs";
import { useLocation } from "react-router-dom";

export const capitalize = (text: string) => {
  let wordsArray = text.toLowerCase().split(" ");

  let capsArray = wordsArray.map((word) => {
    return word.replace(word[0], word[0].toUpperCase());
  });

  return capsArray.join(" ");
};

export const toDateTime = (secs: string) => {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(parseInt(secs));
  return t;
};

export const dotify = (text: string, maxLimit: number) => {
  if (text.length > maxLimit) {
    return text.substring(0, maxLimit - 3) + "...";
  }
  return text;
};

export const getIds = (data: any) => {
  const ids: string[] = [];
  data.map((entity) => ids.push(entity.id));
  return ids;
};

export const getCloudinaryImageUrl = (cldPublicName: string) => {
  return `https://res.cloudinary.com/${CLOUDINARY_NAME}/image/upload/q_80/${cldPublicName}`;
};

export const getCloudinaryAudioUrl = (cldPublicName: string) => {
  return `https://res.cloudinary.com/${CLOUDINARY_NAME}/video/upload/${cldPublicName}`;
};

export const removeItem = <T>(arr: T[], item: T) => {
  return arr.filter((f) => f !== item);
};

export const formatDate = (date: Date) => {
  return dayjs(date, { locale: "fr" }).format("DD MMM HH:mm");
};

export const getRandomAvatar = () => {
  const colors = ["#37B679", "#DA3C3C", "#3291FF", "#7928CA", "#79FFE1"];
  const getRandomIdx = () => Math.floor(Math.random() * colors.length) + 0;

  let idx = getRandomIdx();
  let idx2 = getRandomIdx();

  while (idx2 === idx) {
    idx2 = getRandomIdx();
  }

  return `linear-gradient(140deg, ${colors[idx]}, ${colors[idx2]} 100%)`;
};

export const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

export const getQueryParams = (search: string) => {
  return qs.parse(search, { allowDots: true, ignoreQueryPrefix: true });
};

export const getFilterKind = (value: string) => {
  return Object.keys(value)[0] === "contains" || "is" || "isNot"
    ? "string"
    : null;
};
export const getSortKind = (value: string) => {
  return Object.keys(value)[0] === "contains" || "is" || "isNot"
    ? "string"
    : null;
};

export const paginate = (
  totalItems: number,
  currentPage: number = 1,
  pageSize: number = 10,
  maxPages: number = 10
) => {
  // calculate total pages
  let totalPages = Math.ceil(totalItems / pageSize);

  // ensure current page isn't out of range
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  let startPage: number, endPage: number;
  if (totalPages <= maxPages) {
    // total pages less than max so show all pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // total pages more than max so calculate start and end pages
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      // current page somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  // calculate start and end item indexes
  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalItems);

  // create an array of pages to ng-repeat in the pager control
  let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > startPage;

  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  // return object with all pager properties required by the view
  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages,
    hasNext,
    hasPrev,
    nextPage,
    prevPage,
  };
};
