import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const GET_SALES = async () => {
  try {
    return await apolloClient.query({
      query: gql`
        {
          sales {
            price
            descrip
            saledate
            customer
            employee
          }
        }
      `
    })
  } catch (err) {
    throw err
  }
}

export default {
  GET_SALES
}
