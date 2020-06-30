import Queries from './queries'

const get_sales = async payload => {
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
