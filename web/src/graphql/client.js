import ApolloClient from "apollo-boost";
import fetch from 'node-fetch';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  fetch: fetch
});

client.defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  }
};

export default client;