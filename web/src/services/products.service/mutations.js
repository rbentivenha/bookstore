import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const NEW_PRODUCT = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation createProduct($createProductInput: ProductInput!) {
          createProduct(createProductInput: $createProductInput)
        }
      `,
      variables: {
        createProductInput: payload
      }
    })
  } catch (err) {
    throw err
  }
}

const UPDATE_PRODUCT = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation updateCustomer($updateCustomerInput: CustomerInput!) {
          updateCustomer(updateCustomerInput: $updateCustomerInput)
        }
      `,
      variables: {
        updateCustomerInput: {
          id: payload.user_id,
          fname: payload.fname,
          lname: payload.lname,
          cpf: payload.cpf,
          email: payload.email,
          bdate: payload.bdate,
          phone: payload.phone,
          street_name: payload.street_name,
          street_num: payload.street_num,
          postal_code: payload.postal_code,
          user_type: 'CLIENT',
          city: payload.city,
          cep: payload.cep
        }
      }
    })
  } catch (err) {
    throw err
  }
}

export default {
  NEW_PRODUCT,
  UPDATE_PRODUCT
}
