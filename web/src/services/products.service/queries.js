import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const GET_PRODUCTS = async () => {
  try {
    return await apolloClient.query({
      query: gql`
        {
          products {
            id
            price
            title
            descrip
            status
          }
        }
      `
    })
  } catch (err) {
    throw err
  }
}

export default {
  GET_PRODUCTS
}
