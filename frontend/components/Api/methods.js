import { QUERIES } from "./constants";
import useGQLQuery from './useGQLQuery';

export function useComponentsWithSearch(key, searchText) {
  const variables = {
    searchText
  }
  return useGQLQuery(key, QUERIES.GET_COMPONENTS_WITH_SEARCH_QUERY, variables)
}