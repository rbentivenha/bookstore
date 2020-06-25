import ApolloClient from "apollo-boost";
import fetch from 'node-fetch';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  fetch: fetch
});

export default client;