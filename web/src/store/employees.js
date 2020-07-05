import employee_service from '../services/employee.service'
import { readable, writable } from 'svelte/store'

export const employees = readable(null, function start (set) {
  const employees = employee_service.get_employees()
  Promise.resolve(employees).then(res => {
    set({
      meta: {
        user: [
          { title: 'Salário', key: 'salary', type: 'Money' },
          { title: 'PIS', key: 'pis', type: 'String' },
          { title: 'CPF', type: 'String', key: 'ucpf' },
          { title: 'Email', key: 'email', type: 'String' },
          { title: 'Data Criação', key: 'creation_date', type: 'Date' },
          { title: 'Aniversário', key: 'bdate', type: 'Date' },
          { title: 'Telefone', key: 'phone', type: 'String' },
          { title: 'Tipo', key: 'user_type', type: 'String' }
        ],
        address: [
          { title: 'Rua', key: 'street_name', type: 'String' },
          { title: 'Número', key: 'street_num', type: 'String' },
          { title: 'CEP', key: 'postal_code', type: 'String' },
          { title: 'Cidade', key: 'city', type: 'String' }
        ],
        extraHour: [
          { title: 'Data', key: 'date', type: 'Date' },
          { title: 'Quantidade', key: 'amount', type: 'Float' }
        ],
        registredProducts: [
          { title: 'Nome', key: 'title', type: 'String' },
          { title: 'Preço', key: 'price', type: 'Money' },
          { title: 'Descrição', key: 'descrip', type: 'String' },
          { title: 'Data', key: 'regdate', type: 'Date' }
        ],
        sales: [
          { title: 'Produto', key: 'title', type: 'String' },
          { title: 'Preço', key: 'price', type: 'String' }
        ]
      },
      data: res
    })
  })

  return function stop () {}
})

export const selected = writable(null)

export async function create_employee(payload) {
    try {
        const employee = await employee_service.create_employee(payload);
        return employee
    } catch (err) {
        console.error(err);
    }
}

export async function update_employee(payload) {
  try {
      const employee = await employee_service.update_employee(payload);
      return employee
  } catch (err) {
      console.error(err);
  }
}

export async function create_extra_hour(payload) {
  try {
      const extra_hour = await employee_service.create_extra_hour(payload);
      return extra_hour
  } catch (err) {
      console.error(err);
  }
}