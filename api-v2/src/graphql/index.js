const { gql } = require('apollo-server')

const typeDefs = gql`
  type Employee {
    ucpf: String!
    salary: Float
    pis: String!
    fname: String
    lname: String
    email: String
    creation_date: String
    bdate: String
    phone: String
    postal_code: String!
    address: Address
    extra_hours: [ExtraHours]
    registredProducts: [Products]
    sales: [Sales]
    user_type: String
  }

  type Products {
    id: ID!
    regid: ID!
    price: Float
    title: String
    descrip: String
    regdate: String
  }

  type Sales {
    said: ID!
    pid: ID!
    saledate: String
    ucpf: String!
    epis: String!
    price: Float
    title: String
    descrip: String
  }

  type ExtraHours {
    date: String
    amount: String
  }

  type Address {
    postal_code: String!
    street_name: String
    street_num: String
    city: String
  }

  type Query {
    employees: [Employee]
  }

  input UserInput {
    fname: String
    lname: String
    cpf: String!
    email: String
    bdate: String
    phone: String
    postal_code: String!
    user_type: String!
  }

  input EmployeeInput {
    pis: String!
    ucpf: String!
    salary: Float
  }

  input AddressInput {
    street_name: String
    street_num: String
    city: String
    postal_code: String!
  }

  input ExtraHourInput {
    pis: String!
    amount: Float!
    date: String!
  }

  type Mutation {
    create_user(userInput: UserInput!): String!
    create_employee(employeeInput: EmployeeInput!): String!
    create_address(addressInput: AddressInput!): String!
    update_user(userInput: UserInput!): String!
    update_employee(employeeInput: EmployeeInput!): String!
    update_address(addressInput: AddressInput!): String!
    create_extra_hour(extraHourInput: ExtraHourInput!): String!
  }
`

module.exports = typeDefs
