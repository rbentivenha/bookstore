import { readable, writable } from 'svelte/store'
import customer_service from '../services/customer.service/index'

export const customers = readable(null, function start (set) {
  const customers = customer_service.get_customers()
  Promise.resolve(customers).then(res => {
    set({
      meta: [
        { title: 'CPF', type: 'String', key: 'cpf' },
        { title: 'Email', key: 'email', type: 'String' },
        { title: 'Data Criação', key: 'creation_date', type: 'Date' },
        { title: 'Aniversário', key: 'bdate', type: 'Date' },
        { title: 'Telefone', key: 'phone', type: 'String' },
        { title: 'Tipo', key: 'user_type', type: 'String' }
      ],
      address_meta: [
        { title: 'Nome da Rua', key: 'street_name', type: 'String' },
        { title: 'Número', key: 'street_num', type: 'String' },
        { title: 'Cidade', key: 'city', type: 'String' },
        { title: 'CEP', key: 'postal_code', type: 'String' }
      ],
      buy_meta: [
        { title: 'Média', key: 'avg', type: 'Float'},
        { title: 'Quantidade', key: 'count', type: 'Float'},
        { title: 'Max', key: 'max', type: 'Float'},
        { title: 'Min', key: 'min', type: 'Float'},
      ],
      data: res
    })
  })

  return function stop () {}
})

export const selected = writable(null);

export async function set_customer(payload) {
  const new_employee = await customer_service.new_customer(payload);
  return new_employee;
}

export async function update_customer(payload) {
  const customer = await customer_service.update_customer(payload);
  return customer;
}