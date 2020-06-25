import employee_service from '../services/employee.service'
import { readable, writable } from 'svelte/store'

export const employees = readable(null, function start (set) {
  const employees = employee_service.get_employees()
  Promise.resolve(employees).then(res => {
    set({
      meta: [
        { title: 'Cod', key: 'employee_id', type: 'Number' },
        { title: 'Salário', key: 'salary', type: 'Money' },
        { title: 'PIS', key: 'pis', type: 'String' },
        { title: 'CPF', type: 'String', key: 'cpf' },
        { title: 'Email', key: 'email', type: 'String' },
        { title: 'Data Criação', key: 'creation_date', type: 'Date' },
        { title: 'Aniversário', key: 'bdate', type: 'Date' },
        { title: 'Telefone', key: 'phone', type: 'String' },
        { title: 'Tipo', key: 'user_type', type: 'String' }
      ],
      data: res
    })
  })

  return function stop () {}
})

export const employees_selling = readable(null, function start (set) {
  const employees_selling = employee_service.get_employees_selling()
  Promise.resolve(employees_selling).then(res => {
    set({
      meta: [
        { title: 'Quantidade', key: 'count', type: 'Number' },
        { title: 'Média', key: 'avg', type: 'Money' },
        { title: 'Min', key: 'min', type: 'Money' },
        { title: 'Max', type: 'Float', key: 'max' }
      ],
      data: res
    })
  })

  return function stop () {}
})

export const employees_address = readable(null, function start (set) {
  const employees_address = employee_service.get_employees_address()
  Promise.resolve(employees_address).then(res => {
    set({
      meta: [
        { title: 'Rua', key: 'street_name', type: 'String' },
        { title: 'Número', key: 'street_num', type: 'String' },
        { title: 'Cidade', key: 'city', type: 'String' },
        { title: 'Código Postal', key: 'postal_code', type: 'String' }
      ],
      data: res
    })
  })

  return function stop () {}
})

function employee () {
  const { subscribe, set, update } = writable(null)

  return {
    subscribe,
    create: payload => {
      Promise.resolve(employee_service.create_new_employee(payload)).then(
        res => {
          update(() => res)
        }
      )
    },
    update: payload => {
      Promise.resolve(employee_service.update_employee(payload)).then(res => {
        update(() => res)
      })
    },
    get_by_id: payload => {
      Promise.resolve(employee_service.get_employee_by_id(payload)).then(res => {
        update(() => res)
      })
    },
    reset: () => set(null)
  }
}

export const employee_setter = employee()
