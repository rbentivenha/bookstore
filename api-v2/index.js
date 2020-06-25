const server = require('./src/index.js');

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
