const { gql } = require('apollo-server')

const typeDefs = gql`
  type Employee {
    user_id: ID!
    employee_id: ID!
    salary: Float
    pis: String
    fname: String
    lname: String
    cpf: String
    email: String
    creation_date: String
    bdate: String
    phone: String
    user_type: String
    selling: employee_sell
    address: address
  }

  type employee_sell {
    avg: Float
    count: Int
    max: Float
    min: Float
  }

  type address {
    street_name: String
    street_num: String
    city: String
    postal_code: String
  }

  input EmployeeInput {
    id: ID
    fname: String
    lname: String
    pis: String
    salary: Float
    cpf: String
    email: String
    bdate: String
    phone: String
    street_name: String
    street_num: String
    postal_code: String
    user_type: String
    city: String
    cep: String
  }

  type buy_stat {
    avg: Float
    count: Int
    max: Float
    min: Float
  }

  type Customer {
    user_id: ID!
    fname: String
    lname: String
    cpf: String
    email: String
    creation_date: String
    bdate: String
    phone: String
    user_type: String
    address: [address]
    buy_stat: buy_stat
  }

  type Query {
    employees: [Employee]
    employee(id: ID!): Employee
    customers: [Customer]
  }

  type Mutation {
    createEmployee(createEmployeeInput: EmployeeInput!): ID!
    editEmployee(editEmployeeInput: EmployeeInput!): Boolean
  }
`

module.exports = typeDefs
