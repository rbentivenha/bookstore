import Queries from './queries'

const get_sales = async () => {
  try {
    const {
      data: { sales }
    } = await Queries.GET_SALES()
    return sales
  } catch (err) {
    throw err
  }
}

export default {
  get_sales
}
