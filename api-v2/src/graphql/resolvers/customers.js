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
        SET fname = $1, lname = $2, email = $3, bdate = $4, phone = $5
        WHERE cpf = $6`,
          [
            updateCustomerInput.fname,
            updateCustomerInput.lname,
            updateCustomerInput.email,
            updateCustomerInput.bdate,
            updateCustomerInput.phone,
            updateCustomerInput.cpf,
          ]
        )

        await db.query(
          `UPDATE address
        SET street_name = $1, street_num = $2, city = $3
        WHERE postal_code = $4`,
          [
            updateCustomerInput.street_name,
            updateCustomerInput.street_num,
            updateCustomerInput.city,
            updateCustomerInput.postal_code
          ]
        )

        return true
      } catch (err) {
        console.error("updateCustomer err", err)
      }
    },
    createCustomer: async (_, { createCustomerInput }, __) => {
      const {
        rows: [{ cpf }]
      } = await db.query(
        `INSERT INTO users (fname, lname, cpf, email, bdate, phone, user_type)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING cpf;`,
        [
          createCustomerInput.fname,
          createCustomerInput.lname,
          createCustomerInput.cpf,
          createCustomerInput.email,
          createCustomerInput.bdate,
          createCustomerInput.phone,
          'CLIENT'
        ]
      )

      await db.query(
        `INSERT INTO address (street_name, street_num, city, postal_code)
        VALUES ($1, $2, $3, $4);`,
        [
          createCustomerInput.street_name,
          createCustomerInput.street_num,
          createCustomerInput.city,
          createCustomerInput.postal_code
        ]
      )

      return cpf
    }
  },
  data_loaders: {
    address: async (parent, __, ___) => {
      const { rows } = await db.query(
        `select * from address where address.postal_code = $1`,
        [parent.postal_code]
      )
      return rows
    },
    buy_stat: async (parent, _, __) => {
      const { rows } = await db.query(
        `select AVG(products.price), COUNT(products.title), MAX(products.price), MIN(products.price)
        from sell
        inner join products
        on products.id = sell.product_id
        inner join users
        on users.cpf = sell.employee_id
        where sell.client_id = $1;`,
        [parent.cpf]
      )
      return rows[0]
    }
  }
}
