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
        mutation updateProduct($updateProductInput: ProductInput!) {
          updateProduct(updateProductInput: $updateProductInput)
        }
      `,
      variables: {
        updateProductInput: {
          id: payload.id,
          price: payload.price,
          title: payload.title,
          descrip: payload.descrip,
          status: payload.status
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
