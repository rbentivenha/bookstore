const typeDefs = require('./graphql');
const resolvers = require('./graphql/resolvers');

const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({ typeDefs, resolvers })

module.exports = server;