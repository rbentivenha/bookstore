import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const LOGIN = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation login($loginInput: LoginInput!) {
          login(loginInput: $loginInput) {
            cpf
            user_type
          }
        }
      `,
      variables: {
        loginInput: {
          cpf: payload
        }
      }
    })
  } catch (err) {
    throw err
  }
}

export default {
    LOGIN
}