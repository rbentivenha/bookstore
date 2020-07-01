const typeDefs = require('./graphql')
const resolvers = require('./graphql/resolvers')
const { getAuthorization } = require('./auth/index.js')

const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({
  typeDefs,
  resolvers,
//   context: async ({ req }) => {
//     const cpf = req.headers.authorization || ''
//     const user = await getAuthorization(cpf)

//     return { user }
//   }
})

module.exports = server
