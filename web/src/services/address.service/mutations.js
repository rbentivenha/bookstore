import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const CREATE_ADDRESS = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation create_address($addressInput: AddressInput!) {
          create_address(addressInput: $addressInput)
        }
      `,
      variables: {
        addressInput: {
          street_name: payload.street_name,
          street_num: payload.street_num,
          city: payload.city,
          postal_code: payload.postal_code
        }
      }
    })
  } catch (err) {
    console.error(err)
  }
}

const UPDATE_ADDRESS = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation update_address($addressInput: AddressInput!) {
          update_address(addressInput: $addressInput)
        }
      `,
      variables: {
        addressInput: {
          street_name: payload.street_name,
          street_num: payload.street_num,
          city: payload.city,
          postal_code: payload.postal_code
        }
      }
    })
  } catch (err) {
    console.error(err)
  }
}

export default {
  CREATE_ADDRESS,
  UPDATE_ADDRESS
}
