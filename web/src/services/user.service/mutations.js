import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const CREATE_USER = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation create_user($userInput: UserInput!) {
          create_user(userInput: $userInput)
        }
      `,
      variables: {
        userInput: {
          fname: payload.fname,
          lname: payload.lname,
          cpf: payload.ucpf,
          email: payload.email,
          bdate: payload.bdate,
          phone: payload.phone,
          postal_code: payload.postal_code,
          user_type: payload.user_type
        }
      }
    })
  } catch (err) {
    console.error(err)
  }
}

const UPDATE_USER = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation update_user($userInput: UserInput!) {
          update_user(userInput: $userInput)
        }
      `,
      variables: {
        userInput: {
          fname: payload.fname,
          lname: payload.lname,
          cpf: payload.ucpf,
          email: payload.email,
          bdate: payload.bdate,
          phone: payload.phone,
          postal_code: payload.postal_code,
          user_type: payload.user_type
        }
      }
    })
  } catch (err) {
    console.error(err)
  }
}

export default {
  CREATE_USER,
  UPDATE_USER
}
