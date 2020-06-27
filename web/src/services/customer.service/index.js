import Queries from './queries'
import Mutations from './mutations'

const get_customers = async () => {
  try {
    const {
      data: { customers }
    } = await Queries.GET_CUSTOMERS()
    return customers
  } catch (err) {
    throw err
  }
}

const new_customer = async (payload) => {
  try {
    const {
      data: { createCustomer }
    } = await Mutations.NEW_CUSTOMER(payload)
    return createCustomer
  } catch (err) {
    throw err
  }
}

const update_customer = async (payload) => {
  try {
    const {
      data: { updateCustomer }
    } = await Mutations.UPDATE_CUSTOMER(payload)
    return updateCustomer
  } catch (err) {
    throw err
  }
}

export default {
  get_customers,
  new_customer,
  update_customer
}
