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
        createEmployeeInput: {
          fname: payload.fname,
          lname: payload.lname,
          pis: payload.pis,
          salary: parseFloat(payload.salary),
          cpf: payload.cpf,
          email: payload.email,
          bdate: payload.bdate,
          phone: payload.phone,
          street_name: payload.street_name,
          street_num: payload.street_num,
          postal_code: payload.postal_code,
          user_type: payload.user_type,
          city: payload.city,
          cep: payload.cep
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
        mutation editEmployee($editEmployeeInput: EmployeeInput!) {
          editEmployee(editEmployeeInput: $editEmployeeInput)
        }
      `,
      variables: {
        editEmployeeInput: {
          fname: payload.fname,
          lname: payload.lname,
          pis: payload.pis,
          salary: payload.salary,
          cpf: payload.cpf,
          email: payload.email,
          bdate: payload.bdate,
          phone: payload.phone,
          street_name: payload.street_name,
          street_num: payload.street_num,
          postal_code: payload.postal_code,
          user_type: payload.user_type,
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
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE
}
