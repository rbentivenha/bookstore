const db = require('../../config/database')

module.exports = {
  query: {
    products: async () => {
      const { rows } = await db.query(`
      select products.id, products.price, products.title, products.descrip, products.status from products
        `)
      return rows
    }
  },
  mutation: {
    createProduct: async (_, { createProductInput }, __) => {
      const { rows } = await db.query(
        `
        INSERT INTO products (price, title, descrip, status)
          VALUES ($1, $2, $3, $4)
          RETURNING id
        `,
        [
          createProductInput.price,
          createProductInput.title,
          createProductInput.descrip,
          createProductInput.status
        ]
      )
      return rows[0].id
    }
  },
  data_loaders: {}
}
