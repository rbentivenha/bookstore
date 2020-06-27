const customers = require('./customers')
const employees = require('./employees')

const resolvers = {
  Query: {
    ...customers.query,
    ...employees.query
  },
  Mutation: {
    ...employees.mutation,
    ...customers.mutation
  },
  Employee: {
    ...employees.data_loaders
  },
  Customer: {
    ...customers.data_loaders
  }
}

module.exports = resolvers
