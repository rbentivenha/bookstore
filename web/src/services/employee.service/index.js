import Queries from './queries'
import Mutations from './mutations'

const get_employees = async () => {
  try {
    const {
      data: { employees }
    } = await Queries.GET_EMPLOYEES()
    return employees
  } catch (err) {
    throw err
  }
}

const get_employees_selling = async () => {
  try {
    const {
      data: { employees }
    } = await Queries.GET_EMPLOYEES_SELLING()
    return employees
  } catch (err) {
    throw err
  }
}

const get_employees_address = async () => {
  try {
    const {
      data: { employees }
    } = await Queries.GET_EMPLOYEES_ADDRESS()
    return employees
  } catch (err) {
    throw err
  }
}

const create_new_employee = async payload => {
  try {
    const {
      data: { createEmployee }
    } = await Mutations.CREATE_EMPLOYEE(payload)
    return createEmployee
  } catch (err) {
    throw err
  }
}

const update_employee = async payload => {
  try {
    const {
      data: { editEmployee }
    } = await Mutations.UPDATE_EMPLOYEE(payload)
    return editEmployee
  } catch (err) {
    throw err
  }
}

const get_employee_by_id = async payload => {
  try {
    const {
      data: { employee }
    } = await Queries.GET_EMPLOYEES_BY_ID(payload)
    return employee
  } catch (err) {
    throw err
  }
}

export default {
  get_employees,
  get_employees_selling,
  get_employees_address,
  create_new_employee,
  update_employee,
  get_employee_by_id
}
