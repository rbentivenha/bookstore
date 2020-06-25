import { getStock } from '../graphql/queries.js'
import Client from '../graphql/client.js'
import { readable } from 'svelte/store'

export const stock = readable(null, function start (set) {
  Client.query({
    query: getStock
  }).then(({ data }) => {
      set(data)
  })
  return function stop () {}
})
