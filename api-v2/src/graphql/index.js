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

  type Shop {
    ucpf: String!
    price: Float!
    title: String
    descrip: String
    saledate: String
  }

  type Customer {
    cpf: String!
    fname: String
    lname: String
    email: String
    creation_date: String
    bdate: String
    phone: String
    postal_code: String!
    address: Address
    shopping: [Shop]
    user_type: String
  }

  type Product {
    id: ID!
    price: Float
    title: String
    descrip: String
    epis: String
    regdate: String
  }

  type Sale {
    price: Float
    descrip: String
    saledate: String
    customer: String
    employee: String
  }

  type Query {
    employees: [Employee]
    customers: [Customer]
    products: [Product]
    sales: [Sale]
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

  input ProductInput {
    id: ID
    regid: ID!
    price: Float
    title: String
    descrip: String
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

  input SellInput {
    pid: ID!
    epis: String!
    ucpf: String!
  }

  type Mutation {
    create_user(userInput: UserInput!): String!
    create_employee(employeeInput: EmployeeInput!): String!
    create_address(addressInput: AddressInput!): String!
    update_user(userInput: UserInput!): String!
    update_employee(employeeInput: EmployeeInput!): String!
    update_address(addressInput: AddressInput!): String!
    new_product_registry(epis: String!): ID!
    create_extra_hour(extraHourInput: ExtraHourInput!): String!
    create_product(productInput: ProductInput!): ID!
    update_product(productInput: ProductInput!): ID!
    sell(sellInput: SellInput!): ID!
  }
`

module.exports = typeDefs
