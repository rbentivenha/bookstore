const db = require('../../config/database')

module.exports = {
  query: {
    products: async () => {
      const { rows } = await db.query(`
      select products.id, products.price, products.title, products.descrip, products.status
      from products
      where products.status = 0
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
    },
    updateProduct: async (_, { updateProductInput }, __) => {
      try {
        await db.query(
          `UPDATE products
           SET price = $1, title = $2, descrip = $3, status = $4
           WHERE id = $5`,
          [
            updateProductInput.price,
            updateProductInput.title,
            updateProductInput.descrip,
            updateProductInput.status,
            updateProductInput.id
          ]
        )

        return true
      } catch (err) {
        console.error(err)
        return false
      }
    }
  },
  data_loaders: {}
}
