import { readable } from 'svelte/store'
import sale_service from '../services/sale.service/index'

export const sales = readable(null, function start (set) {
  const sales = sale_service.get_sales()
  Promise.resolve(sales).then(res => {
    set({
      meta: [
        { title: 'Preço', key: 'price', type: 'String' },
        { title: 'Descrição', type: 'String', key: 'descrip' },
        { title: 'Data', key: 'saledate', type: 'Date' },
        { title: 'Cliente', key: 'customer', type: 'String' },
        { title: 'Colaborador', key: 'employee', type: 'String' }
      ],
      data: res
    })
  })

  return function stop () {}
})