import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const GET_EMPLOYEES = async () => {
  try {
    return await apolloClient.query({
      query: gql`
        {
          employees {
            ucpf
            salary
            pis
            fname
            lname
            email
            creation_date
            bdate
            phone
            postal_code
            address {
              postal_code
              street_name
              street_num
              city
            }
            extra_hours {
              date
              amount
            }
            registredProducts {
              id
              regid
              price
              title
              descrip
              regdate
            }
            sales {
              said
              pid
              saledate
              ucpf
              epis
              price
              title
              descrip
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
  GET_EMPLOYEES
}
