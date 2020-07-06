import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const GET_CUSTOMERS = async () => {
  try {
    return await apolloClient.query({
      query: gql`
        {
          customers {
            cpf
            fname
            lname
            email
            creation_date
            bdate
            phone
            address {
              postal_code
              street_name
              street_num
              city
            }
            shopping {
              ucpf
              price
              title
              descrip
              saledate
            }
            user_type
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
