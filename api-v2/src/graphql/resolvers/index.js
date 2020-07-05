const customers = require('./customers')
const employees = require('./employees')
const products = require('./products')
const sales = require('./sales')
const user = require('./user')
const address = require('./address')
const login = require('./login')

const resolvers = {
  Query: {
    ...products.query,
    ...customers.query,
    ...employees.query,
    ...sales.query
  },
  Mutation: {
    //   ...login.mutation,
    //   ...products.mutation,
    ...address.mutation,
    ...user.mutation,
    ...employees.mutation
    //   ...customers.mutation
  },
  Employee: {
    ...employees.data_loaders
  }
  // Customer: {
  //   ...customers.data_loaders
  // },
  // Product: {
  //   ...products.data_loaders
  // }
}

module.exports = resolvers
