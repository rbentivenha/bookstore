// import Queries from './queries'
import Mutations from './mutations'

const create_user = async (payload) => {
  try {
    const {
      data: { create_user }
    } = await Mutations.CREATE_USER(payload)
    return create_user
  } catch (err) {
    throw err
  }
}

const update_user = async (payload) => {
  try {
    const {
      data: {update_user }
    } = await Mutations.UPDATE_USER(payload)
    return update_user
  } catch (err) {
    throw err
  }
}

export default {
    create_user,
    update_user
}