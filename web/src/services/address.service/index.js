// import Queries from './queries'
import Mutations from './mutations'

async function create_address (payload) {
  try {
    const {
      data: { create_address }
    } = await Mutations.CREATE_ADDRESS(payload)
    return create_address
  } catch (err) {
    console.error(err)
  }
}

async function update_address (payload) {
  try {
    const {
      data: { update_address }
    } = await Mutations.UPDATE_ADDRESS(payload)
    return update_address
  } catch (err) {
    console.error(err)
  }
}

export default {
  create_address,
  update_address
}
