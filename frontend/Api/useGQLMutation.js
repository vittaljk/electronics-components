import { useMutation } from "@tanstack/react-query";
import request from "graphql-request"
import CONFIG from '../config'

const useGQLMutation = (mutation) => {
    return useMutation({
        mutationFn: async (variables) => {
            request(
                CONFIG.ENDPOINT,
                mutation,
                variables
            )
        }
    })
}

export default useGQLMutation;