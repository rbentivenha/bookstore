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
  mutation: {
    updateCustomer: async (_, { updateCustomerInput }, __) => {
      try {
        await db.query(
          `UPDATE users
        SET fname = $1, lname = $2, cpf = $3, email = $4, bdate = $5, phone = $6
        WHERE user_id = $7`,
          [
            updateCustomerInput.fname,
            updateCustomerInput.lname,
            updateCustomerInput.cpf,
            updateCustomerInput.email,
            updateCustomerInput.bdate,
            updateCustomerInput.phone,
            parseInt(updateCustomerInput.id)
          ]
        )

        await db.query(
          `UPDATE address
        SET street_name = $1, street_num = $2, postal_code = $3, city = $4
        WHERE user_id = $5`,
          [
            updateCustomerInput.street_name,
            updateCustomerInput.street_num,
            updateCustomerInput.postal_code,
            updateCustomerInput.city,
            parseInt(updateCustomerInput.id)
          ]
        )

        return true
      } catch (err) {
        console.error("updateCustomer err", err)
      }
    },
    createCustomer: async (_, { createCustomerInput }, __) => {
      const {
        rows: [{ user_id }]
      } = await db.query(
        `INSERT INTO users (fname, lname, cpf, pwd, email, bdate, phone, user_type)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING user_id;`,
        [
          createCustomerInput.fname,
          createCustomerInput.lname,
          createCustomerInput.cpf,
          'SenhaPadrão',
          createCustomerInput.email,
          createCustomerInput.bdate,
          createCustomerInput.phone,
          'CLIENT'
        ]
      )

      await db.query(
        `INSERT INTO address (user_id, street_name, street_num, city, postal_code)
        VALUES ($1, $2, $3, $4, $5);`,
        [
          user_id,
          createCustomerInput.street_name,
          createCustomerInput.street_num,
          createCustomerInput.city,
          createCustomerInput.postal_code
        ]
      )

      return user_id
    }
  },
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
