import { useMutation } from "@tanstack/react-query";
import request from "graphql-request"
import CONFIG from '../../config'

const useGQLMutation = (mutation, variables, config = {}) => {
    return useMutation({
        mutationFn: async (variables) => {
            request(
                CONFIG.BACKEND_URL,
                mutation,
                variables
            )
        }
    })
}

export default useGQLMutation;