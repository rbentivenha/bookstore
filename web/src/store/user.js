import user_service from '../services/user.service/index'

export async function create_user (payload) {
  try {
    const user = await user_service.create_user(payload)
    return user
  } catch (err) {
    console.error(err)
  }
}
export async function update_user (payload) {
  try {
    const user = await user_service.update_user(payload)
    return user
  } catch (err) {
    console.error(err)
  }
}
