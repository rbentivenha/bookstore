import { readable } from 'svelte/store'
import sale_service from '../services/sale.service/index'

export const sales = readable(null, function start (set) {
  const sales = sale_service.get_sales()
  Promise.resolve(sales).then(res => {
    set({
      meta: [
        { title: 'Cliente', key: 'cfname', type: 'String' },
        { title: 'Sobrenome', type: 'String', key: 'clname' },
        { title: 'Descrição', key: 'descrip', type: 'String' },
        { title: 'Colaborador', key: 'efname', type: 'String' },
        { title: 'Sobrenome', key: 'elname', type: 'String' },
        { title: 'id', key: 'id', type: 'Number' },
        { title: 'Produto', key: 'pid', type: 'Number' },
        { title: 'Preço', key: 'price', type: 'Number' },
        { title: 'Titulo', key: 'title', type: 'String' }
      ],
      data: res
    })
  })

  return function stop () {}
})