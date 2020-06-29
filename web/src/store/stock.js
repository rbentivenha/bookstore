import { readable, writable } from 'svelte/store'
import products_service from '../services/products.service/index'

export const products = readable(null, function start (set) {
  const products = products_service.get_products()
  Promise.resolve(products).then(res => {
    set({
      meta: [
        { title: 'Cod', key: 'product_id', type: 'Number' },
        { title: 'Preço', type: 'Money', key: 'price' },
        { title: 'Título', key: 'title', type: 'String' },
        { title: 'Descrição', key: 'descrip', type: 'String' },
        { title: 'Autor', key: 'author', type: 'String' },
        { title: 'ISBN', key: 'isbn', type: 'String' },
        { title: 'Edição', key: 'edition', type: 'String' },
        { title: 'Editora', key: 'editor', type: 'String' },
        { title: 'CDD', key: 'cdd', type: 'String' }
      ],
      data: res
    })
  })

  return function stop () {}
})

export const selected = writable(null);

export async function new_product(payload) {
  const new_product = await products_service.new_product(payload);
  return new_product;
}

// export async function update_product(payload) {
//   const product = await products_service.update_product(payload);
//   return product;
// }