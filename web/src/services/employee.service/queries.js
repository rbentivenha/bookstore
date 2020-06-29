import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const GET_EMPLOYEES = async () => {
  try {
    return await apolloClient.query({
      query: gql`
        {
          employees {
            salary
            pis
            fname
            lname
            cpf
            email
            creation_date
            bdate
            phone
            user_type
          }
        }
      `
    })
  } catch (err) {
    throw err
  }
}

const GET_EMPLOYEES_SELLING = async () => {
  try {
    return await apolloClient.query({
      query: gql`
        {
          employees {
            cpf
            selling {
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

const GET_EMPLOYEES_ADDRESS = async () => {
  try {
    return await apolloClient.query({
      query: gql`
        {
          employees {
            cpf
            address {
              street_name
              street_num
              city
              postal_code
            }
          }
        }
      `
    })
  } catch (err) {
    throw err
  }
}

const GET_EMPLOYEES_BY_ID = async payload => {
  try {
    return await apolloClient.query({
      query: gql`
        query($id: ID!) {
          employee(id: $id) {
            salary
            pis
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
          }
        }
      `,
      variables: {
        id: payload
      }
    })
  } catch (err) {
    throw err
  }
}

export default {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SELLING,
  GET_EMPLOYEES_ADDRESS,
  GET_EMPLOYEES_BY_ID
}
