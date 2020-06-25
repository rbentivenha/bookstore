import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const GET_CUSTOMERS = async () => {
  try {
    return await apolloClient.query({
      query: gql`
        {
          customers {
            user_id
            fname
            lname
            cpf
            email
            creation_date
            bdate
            phone
            user_type
            address {
              street_name
              street_num
              city
              postal_code
            }
            buy_stat {
              avg
              count
              max
              min
            }
          }
        }
      `
    })
  } catch (err) {
    throw err
  }
}

export default {
  GET_CUSTOMERS
}
