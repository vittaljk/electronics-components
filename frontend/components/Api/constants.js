import { gql } from "graphql-request";

export const QUERIES = {
    GET_COMPONENTS_WITH_SEARCH_QUERY: gql`
        query getComponents($searchText: String!) {
            components(
                filters: {
                    or: [
                        { name: { contains: $searchText } }
                        { modelNumber: { contains: $searchText } }
                    ]
                }
            ) {
                data {
                    id
                    attributes {
                    name
                    description
                    modelNumber
                    isObsolete
                    eolDate
                    make {
                        data {
                            id
                            attributes {
                                name
                            }
                        }
                    }
                    images {
                        data {
                          id
                          attributes {
                            name
                            url
                            width
                            height
                          }
                        }
                    }
                    categories {
                        data {
                        id
                        attributes {
                            name
                            description
                        }
                        }
                    }
                    replacableComponents {
                        data {
                        id
                        attributes {
                            name
                            description
                            modelNumber
                            isObsolete
                            eolDate
                            package
                            dataSheet
                            images {
                                data {
                                    id
                                }
                            }
                            categories {
                                data {
                                    id
                                    attributes {
                                        name
                                        description
                                        }
                                    }
                                }
                            }
                        }
                        }
                    }
                }
            }
        }
    `
}

export const MUTATIONS = {
    ADD_COMPONENT: gql`
        mutation addComponent($componentData: ComponentInput!) {
            createComponent(data: $componentData) {
                data {
                    id
                    attributes {
                        name
                    }
                }
            }  
        }
    `
}
