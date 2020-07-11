import { readable, writable } from 'svelte/store'
import products_service from '../services/products.service/index'

export const get_products = async () => {
  return await products_service.get_products()
}

export const products = readable(null, function start (set) {
  const products = products_service.get_products()
  Promise.resolve(products).then(res => {
    set({
      meta: [
        { title: 'Cod', key: 'id', type: 'Number' },
        { title: 'Preço', type: 'Money', key: 'price' },
        { title: 'Título', key: 'title', type: 'String' },
        { title: 'Descrição', key: 'descrip', type: 'String' },
        { title: 'Colaborador', key: 'epis', type: 'String' },
        { title: 'Data', key: 'regdate', type: 'Date' }
      ],
      data: res
    })
  })

  return function stop () {}
})

export const selected = writable(null);

export async function new_product_registry(payload) {
  const new_product_registry = await products_service.new_product_registry(payload);
  return new_product_registry;
}

export async function new_product(payload) {
  const new_product = await products_service.new_product(payload);
  return new_product;
}

export async function update_product(payload) {
  const update_product = await products_service.update_product(payload);
  return update_product;
}

export async function sell(payload) {
  const sell = await products_service.sell(payload);
  return sell;
}