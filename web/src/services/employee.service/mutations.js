import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const CREATE_EMPLOYEE = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation createEmployee($createEmployeeInput: EmployeeInput!) {
          createEmployee(createEmployeeInput: $createEmployeeInput)
        }
      `,
      variables: {
        createEmployeeInput: payload
      }
    })
  } catch (err) {
    throw err
  }
}

const UPDATE_EMPLOYEE = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation editEmployee($editEmployeeInput: EmployeeInput!) {
          editEmployee(editEmployeeInput: $editEmployeeInput)
        }
      `,
      variables: {
        editEmployeeInput: payload
      }
    })
  } catch (err) {
    throw err
  }
}

export default {
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE
}
