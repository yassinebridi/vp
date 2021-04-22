import { getQueryParams } from "@utils";
import { useLocation } from "react-router";

type ParamsType = { query: string; type: "number" | "string" | "object" };

export const useMyParams = <T>(queries: ParamsType[]): T => {
  const { search } = useLocation();
  const params = getQueryParams(search);

  //TODO: Figure out how to push to a generic type, this works for now, but it's not ideal
  let queryParams: any = [];
  queries.map((query) => {
    if (query.type === "number") {
      queryParams.push(+params[query.query]);
    } else {
      queryParams.push(params[query.query]);
    }
  });

  return queryParams;
};
