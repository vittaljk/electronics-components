import { useQuery } from "@tanstack/react-query";
import request from "graphql-request"
import CONFIG from '../config'

const useGQLQuery = (keys, query, variables = {}, initialData = {}) => {
    return useQuery({
        queryKey: keys,
        queryFn: async () => {
            return request(
                CONFIG.ENDPOINT,
                query,
                variables
            )
        },
        initialData
    });
}

export default useGQLQuery;