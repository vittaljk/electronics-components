import { useQuery } from "@tanstack/react-query";
import request from "graphql-request"
import CONFIG from '../config'

const useGQLQuery = (keys, query, variables = {}) => {
    return useQuery({
        queryKey: keys,
        queryFn: async () =>
        request(
            CONFIG.ENDPOINT,
            query,
            variables
        )
    });
}

export default useGQLQuery;