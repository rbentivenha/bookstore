import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const NEW_PRODUCT_REGISTRY = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation($epis: String!) {
          new_product_registry(epis: $epis)
        }
      `,
      variables: {
        epis: payload
      }
    })
  } catch (err) {
    throw err
  }
}

const NEW_PRODUCT = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation($productInput: ProductInput!) {
          create_product(productInput: $productInput)
        }
      `,
      variables: {
        productInput: { 
          ...payload,
          price: parseFloat(payload.price)
        }
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
        mutation($productInput: ProductInput!) {
          update_product(productInput: $productInput)
        }
      `,
      variables: {
        productInput: { 
          id: payload.id,
          regid: payload.regid,
          price: parseFloat(payload.price),
          title: payload.title,
          descrip: payload.descrip
        }
      }
    })
  } catch (err) {
    throw err
  }
}

const SELL = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation($sellInput: SellInput!) {
          sell(sellInput: $sellInput)
        }
      `,
      variables: {
        sellInput: { 
          pid: payload.pid,
          epis: payload.epis,
          ucpf: payload.ucpf
        }
      }
    })
  } catch (err) {
    throw err
  }
}

export default {
  NEW_PRODUCT_REGISTRY,
  NEW_PRODUCT,
  UPDATE_PRODUCT,
  SELL
}
