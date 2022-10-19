import { useQuery } from "@tanstack/react-query";
import request from "graphql-request"
import CONFIG from '../../config'

const useGQLQuery = (key, query, variables, config = {}) => {
    const data = async () => await request(CONFIG.BACKEND_URL, query, variables);
    return useQuery(key, data, config);
}

export default useGQLQuery;