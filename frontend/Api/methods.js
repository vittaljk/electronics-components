import request from "graphql-request";
import { QUERIES, MUTATIONS } from "./constants";
import useGQLQuery from './useGQLQuery';
import useGQLMutation from "./useGQLMutation.js";
import { CONFIG } from '../config';

export function useComponentsWithSearch(key, searchText = '') {
  const variables = {
    searchText
  }
  return useGQLQuery(key, QUERIES.GET_COMPONENTS_WITH_SEARCH_QUERY, variables)
}

export function getComponentsWithSearch(keys = [], variables = {}, initialData = {}) {
  return useGQLQuery(keys, QUERIES.GET_COMPONENTS_WITH_SEARCH_QUERY, variables, initialData);
}

export function addComponent() {
  return useGQLMutation(MUTATIONS.ADD_COMPONENT);
}


export function useComponentsWithSearchInitialData() {
  return request(
    CONFIG.ENDPOINT,
    QUERIES.GET_COMPONENTS_WITH_SEARCH_QUERY,
    { searchText: '' }
  )
}