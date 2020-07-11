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

const new_product_registry = async (payload) => {
  try {
    const {
      data: { new_product_registry }
    } = await Mutations.NEW_PRODUCT_REGISTRY(payload)
    return new_product_registry
  } catch (err) {
    throw err
  }
}

const new_product = async (payload) => {
  try {
    const {
      data: { create_product }
    } = await Mutations.NEW_PRODUCT(payload)
    return create_product
  } catch (err) {
    throw err
  }
}

const update_product = async (payload) => {
  try {
    const {
      data: { update_product }
    } = await Mutations.UPDATE_PRODUCT(payload)
    return update_product
  } catch (err) {
    throw err
  }
}

const sell = async (payload) => {
  try {
    const {
      data: { sell }
    } = await Mutations.SELL(payload)
    return sell
  } catch (err) {
    throw err
  }
}

export default {
  get_products,
  new_product_registry,
  new_product,
  update_product,
  sell
}
