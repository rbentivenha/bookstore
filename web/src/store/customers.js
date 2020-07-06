import { readable, writable } from 'svelte/store'
import customer_service from '../services/customer.service/index'

export const customers = readable(null, function start (set) {
  const customers = customer_service.get_customers()
  Promise.resolve(customers).then(res => {
    set({
      meta: {
        user: [
          { title: 'CPF', type: 'String', key: 'cpf' },
          { title: 'Email', key: 'email', type: 'String' },
          { title: 'Data Criação', key: 'creation_date', type: 'Date' },
          { title: 'Aniversário', key: 'bdate', type: 'Date' },
          { title: 'Telefone', key: 'phone', type: 'String' },
          { title: 'Tipo', key: 'user_type', type: 'String' }
        ],
        address: [
          { title: 'Nome da Rua', key: 'street_name', type: 'String' },
          { title: 'Número', key: 'street_num', type: 'String' },
          { title: 'Cidade', key: 'city', type: 'String' },
          { title: 'CEP', key: 'postal_code', type: 'String' }
        ],
        shop: [
          { title: 'CPF', key: 'ucpf', type: 'String' },
          { title: 'Preço', key: 'price', type: 'Float' },
          { title: 'Produto', key: 'title', type: 'String' },
          { title: 'Descrição', key: 'descrip', type: 'Sring' },
          { title: 'Data', key: 'saledate', type: 'Date' }
        ]
      },
      data: res
    })
  })

  return function stop () {}
})

export const selected = writable(null)
