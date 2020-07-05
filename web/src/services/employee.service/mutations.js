import gql from 'graphql-tag'
import apolloClient from '../../graphql/client.js'

const CREATE_EMPLOYEE = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation create_employee($employeeInput: EmployeeInput!) {
          create_employee(employeeInput: $employeeInput)
        }
      `,
      variables: {
        employeeInput: {
          pis: payload.pis,
          ucpf: payload.cpf,
          salary: parseFloat(payload.salary)
        }
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
        mutation update_employee($employeeInput: EmployeeInput!) {
          update_employee(employeeInput: $employeeInput)
        }
      `,
      variables: {
        employeeInput: {
          pis: payload.pis,
          salary: payload.salary,
          ucpf: payload.ucpf
        }
      }
    })
  } catch (err) {
    throw err
  }
}

const CREATE_EXTRA_HOUR = async payload => {
  try {
    return await apolloClient.mutate({
      mutation: gql`
        mutation create_extra_hour($extraHourInput: ExtraHourInput!) {
          create_extra_hour(extraHourInput: $extraHourInput)
        }
      `,
      variables: {
        extraHourInput: {
          pis: payload.pis,
          amount: parseFloat(payload.amount),
          date: payload.date
        }
      }
    })
  } catch (err) {
    throw err
  }
}
CREATE_EXTRA_HOUR

export default {
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  CREATE_EXTRA_HOUR
}
