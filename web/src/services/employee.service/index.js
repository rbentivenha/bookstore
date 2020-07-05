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

const create_employee = async payload => {
  try {
    const {
      data: { create_employee }
    } = await Mutations.CREATE_EMPLOYEE(payload)
    return create_employee
  } catch (err) {
    throw err
  }
}

const update_employee = async payload => {
  try {
    const {
      data: { update_employee }
    } = await Mutations.UPDATE_EMPLOYEE(payload)
    return update_employee
  } catch (err) {
    throw err
  }
}

const create_extra_hour = async payload => {
  try {
    const {
      data: { create_extra_hour }
    } = await Mutations.CREATE_EXTRA_HOUR(payload)
    return create_extra_hour
  } catch (err) {
    throw err
  }
}

export default {
  get_employees,
  create_employee,
  update_employee,
  create_extra_hour
}
