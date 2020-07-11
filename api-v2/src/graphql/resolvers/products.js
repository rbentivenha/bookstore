const db = require('../../config/database')

module.exports = {
  query: {
    products: async (_, __, ___) => {
      try {
        const { rows } = await db.query(
          `
          select pr.id, pr.price, pr.title, pr.descrip, ir.epis, ir.regdate from products pr
          inner join item_reg ir
          on pr.regid = ir.id
          where pr.id not in (select s.pid from sale s)
        `
        )
        return rows
      } catch (err) {
        console.error(err)
      }
    }
  },
  mutation: {
    new_product_registry: async (_, { epis }, ___) => {
      try {
        const {
          rows: [{ id }]
        } = await db.query(
          `
            insert into item_reg (epis, regdate)
            values ($1, $2)
            returning id
          `,
          [epis, new Date()]
        )
        return id
      } catch (error) {
        console.error(error)
      }
    },
    create_product: async (_, { productInput }, ___) => {
      try {
        const {
          rows: [{ id }]
        } = await db.query(
          `
            insert into products (regid, price, title, descrip)
            values ($1, $2, $3, $4)
            returning id
          `,
          [
            productInput.regid,
            productInput.price,
            productInput.title,
            productInput.descrip
          ]
        )
        return id
      } catch (err) {
        console.error(err)
      }
    },
    update_product: async (_, { productInput }, ___) => {
      try {
        const {
          rows: [{ id }]
        } = await db.query(
          `
            update products
            set regid = $1, price = $2, title = $3, descrip = $4
            where products.id = $5
            returning products.id
          `,
          [
            productInput.regid,
            productInput.price,
            productInput.title,
            productInput.descrip,
            productInput.id
          ]
        )
        return id
      } catch (err) {
        console.error(err)
      }
    }
  },
  data_loaders: {}
}
