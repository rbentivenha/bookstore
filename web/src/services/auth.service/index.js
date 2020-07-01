import Mutations from './mutations'

const login = async payload => {
  try {
    const {
      data: { login }
    } = await Mutations.LOGIN(payload)
    return login
  } catch (err) {
    throw err
  }
}

export default {
    login
}