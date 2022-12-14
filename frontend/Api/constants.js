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
        },
        pagination: {limit: 1000}
      ) {
        data {
          id
          attributes {
            name
            slug
          }
        }
      }
    }    
  `,
  GET_COMPONENT_BY_SLUG: gql`
    query getComponentBySlug($slug: String!) {
      components(filters: { slug: { eq: $slug } }) {
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
