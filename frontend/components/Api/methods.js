import { QUERIES, MUTATIONS } from "./constants";
import useGQLQuery from './useGQLQuery';
import useGQLMutation from "./useGQLMutation.js";

export function useComponentsWithSearch(key, searchText) {
  const variables = {
    searchText
  }
  return useGQLQuery(key, QUERIES.GET_COMPONENTS_WITH_SEARCH_QUERY, variables)
}

export function useAddComponent(componentData) {
  const variables = {
    componentData
  }
  return useGQLMutation(MUTATIONS.ADD_COMPONENT, variables);
}