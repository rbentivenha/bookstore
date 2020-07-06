const db = require('../../config/database')

module.exports = {
  query: {
    customers: async (_, __, ___) => {
      try {
        const { rows } = await db.query(
          `
          select * from users
          inner join address
          on address.postal_code = users.postal_code
        `
        )
        return rows
      } catch (err) {
        console.error(err)
      }
    }
  },
  mutation: {},
  data_loaders: {
    address: async (parent, __, ___) => {
    console.log("parent", parent)
      const { rows } = await db.query(
        `
        select * from address
          where address.postal_code = $1
        `,
        [parent.postal_code]
      )
      return rows[0]
    },
    shopping: async (parent, __, ___) => {
      const { rows } = await db.query(
        `
          select ucpf, price, title, descrip, saledate from sale s
          inner join products
          on s.pid = products.id
          inner join items_sale
          on s.pid = items_sale.pid
          where s.ucpf = $1
        `,
        [parent.cpf]
      )
      return rows
    },
    /* shopping:  */
  }
}
