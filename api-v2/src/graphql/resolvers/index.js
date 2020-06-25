const customers = require('./customers')
const employees = require('./employees')

const resolvers = {
  Query: {
    ...customers.query,
    ...employees.query
  },
  Mutation: {
    ...employees.mutation
  },
  Employee: {
    ...employees.data_loaders
  },
  Customer: {
    ...customers.data_loaders
  }
}

module.exports = resolvers
