import Queries from './queries'
import Mutations from './mutations'

const get_products = async () => {
  try {
    const {
      data: { products }
    } = await Queries.GET_PRODUCTS()
    return products
  } catch (err) {
    throw err
  }
}

const new_product = async (payload) => {
  try {
    const {
      data: { createProduct }
    } = await Mutations.NEW_PRODUCT(payload)
    return createProduct
  } catch (err) {
    throw err
  }
}

const update_product = async (payload) => {
  try {
    const {
      data: { updateProduct }
    } = await Mutations.UPDATE_PRODUCT(payload)
    return updateProduct
  } catch (err) {
    throw err
  }
}

export default {
  get_products,
  new_product,
  update_product
}
