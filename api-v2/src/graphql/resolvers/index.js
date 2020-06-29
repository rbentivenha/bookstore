const customers = require('./customers')
const employees = require('./employees')
const products = require('./products')

const resolvers = {
  Query: {
    ...products.query,
    ...customers.query,
    ...employees.query
  },
  Mutation: {
    ...products.mutation,
    ...employees.mutation,
    ...customers.mutation
  },
  Employee: {
    ...employees.data_loaders
  },
  Customer: {
    ...customers.data_loaders
  },
  Product: {
    ...products.data_loaders
  }
}

module.exports = resolvers
