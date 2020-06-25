const db = require('../../config/database')

module.exports = {
  query: {
    customers: async (_, __, ___) => {
      const { rows } = await db.query(
        `select * from users where user_type like '%CLIENT%'`
      )
      return rows
    }
  },
  mutation: {},
  data_loaders: {
    address: async (parent, __, ___) => {
      const { rows } = await db.query(
        `select * from address where address.user_id = $1`,
        [parent.user_id]
      )
      return rows
    },
    buy_stat: async (parent, _, __) => {
      const { rows } = await db.query(
        `select AVG(products.price), COUNT(products.title), MAX(products.price), MIN(products.price)
        from sell
        inner join products
        on products.product_id = sell.product_id
        inner join users
        on users.user_id = sell.employee_id
        where sell.client_id = $1;`,
        [parent.user_id]
      )
      return rows[0]
    }
  }
}
