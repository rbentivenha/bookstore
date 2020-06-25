import Queries from './queries'
// import Mutations from './mutations'

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

export default {
  get_customers
}
