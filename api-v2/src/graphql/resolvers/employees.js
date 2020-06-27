const db = require('../../config/database')

module.exports = {
  query: {
    employees: async (_, __, ___) => {
      const { rows } = await db.query(
        `select * from employees
                  inner join users
                  on employees.user_id = users.user_id`
      )
      return rows
    },
    employee: async (_, { id }, __) => {
      const { rows } = await db.query(
        `select * from employees
                  inner join users
                  on employees.user_id = $1`,
        [id]
      )
      return rows[0]
    }
  },
  mutation: {
    createEmployee: async (_, { createEmployeeInput }, __) => {

      const {
        rows: [{ user_id }]
      } = await db.query(
        `INSERT INTO users (fname, lname, cpf, pwd, email, bdate, phone, user_type)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING user_id;`,
        [
          createEmployeeInput.fname,
          createEmployeeInput.lname,
          createEmployeeInput.cpf,
          'SenhaPadrão',
          createEmployeeInput.email,
          createEmployeeInput.bdate,
          createEmployeeInput.phone,
          createEmployeeInput.user_type
        ]
      )

      await db.query(
        `INSERT INTO address (user_id, street_name, street_num, city, postal_code)
        VALUES ($1, $2, $3, $4, $5);`,
        [
          user_id,
          createEmployeeInput.street_name,
          createEmployeeInput.street_num,
          createEmployeeInput.city,
          createEmployeeInput.postal_code
        ]
      )

      await db.query(
        `INSERT INTO employees (user_id, salary, pis)
        VALUES ($1, $2, $3);`,
        [user_id, createEmployeeInput.salary, createEmployeeInput.pis]
      )

      return user_id
    },
    editEmployee: async (_, { editEmployeeInput }, __) => {
      return true
    }
  },
  data_loaders: {
    selling: async parent => {
      const { rows } = await db.query(
        `select AVG(products.price), COUNT(products.title), MAX(products.price), MIN(products.price)
          from sell
          inner join products
          on products.product_id = sell.product_id
          inner join users
          on users.user_id = sell.client_id
          where sell.employee_id = $1;`,
        [parent.user_id]
      )
      return rows[0]
    },
    address: async parent => {
      const { rows } = await db.query(
        `select street_name, street_num, city, postal_code from employees
            inner join address
            on address.user_id = $1`,
        [parent.user_id]
      )
      return rows[0]
    }
  }
}
