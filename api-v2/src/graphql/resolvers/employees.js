const db = require('../../config/database')

module.exports = {
  query: {
    employees: async (_, __, ___) => {
      const { rows } = await db.query(
        `select * from employee
            inner join users
            on employee.user_id = users.cpf`
      )
      return rows
    },
    employee: async (_, { id }, __) => {
      const { rows } = await db.query(
        `select * from employee
                  inner join users
                  on users.cpf = $1`,
        [id]
      )
      return rows[0]
    }
  },
  mutation: {
    createEmployee: async (_, { createEmployeeInput }, __) => {
      const {
        rows: [{ cpf }]
      } = await db.query(
        `INSERT INTO users (fname, lname, cpf, email, bdate, phone, user_type)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING cpf;`,
        [
          createEmployeeInput.fname,
          createEmployeeInput.lname,
          createEmployeeInput.cpf,
          createEmployeeInput.email,
          createEmployeeInput.bdate,
          createEmployeeInput.phone,
          createEmployeeInput.user_type
        ]
      )

      await db.query(
        `INSERT INTO address (street_name, street_num, city, postal_code)
        VALUES ($1, $2, $3, $4);`,
        [
          createEmployeeInput.street_name,
          createEmployeeInput.street_num,
          createEmployeeInput.city,
          createEmployeeInput.postal_code
        ]
      )

      await db.query(
        `INSERT INTO employee (user_id, salary, pis)
        VALUES ($1, $2, $3);`,
        [createEmployeeInput.cpf, createEmployeeInput.salary, createEmployeeInput.pis]
      )

      return cpf
    },
    editEmployee: async (_, { editEmployeeInput }, __) => {
      try {
        await db.query(
          `UPDATE users
           SET fname = $1, lname = $2, email = $3, bdate = $4, phone = $5
           WHERE cpf = $6`,
          [
            editEmployeeInput.fname,
            editEmployeeInput.lname,
            editEmployeeInput.email,
            editEmployeeInput.bdate,
            editEmployeeInput.phone,
            editEmployeeInput.cpf
          ]
        )
        await db.query(
          `UPDATE employee
           SET salary = $1, pis = $2
           WHERE cpf = $3`,
          [
            editEmployeeInput.salary,
            editEmployeeInput.pis,
            editEmployeeInput.cpf
          ]
        )
        await db.query(
          `UPDATE address
           SET street_name = $1, street_num = $2, city = $3
           WHERE postal_code = $4`,
          [
            editEmployeeInput.street_name,
            editEmployeeInput.street_num,
            editEmployeeInput.city,
            editEmployeeInput.postal_code
          ]
        )
        return true
      } catch (err) {
        console.error(err);
        return false
      }
    }
  },
  data_loaders: {
    selling: async parent => {
      const { rows } = await db.query(
        `select AVG(products.price), COUNT(products.title), MAX(products.price), MIN(products.price)
          from sell
          inner join products
          on products.id = sell.product_id
          inner join users
          on users.cpf = sell.client_id
          where sell.employee_id = $1;`,
        [parent.cpf]
      )
      return rows[0]
    },
    address: async parent => {
      const { rows } = await db.query(
        `select street_name, street_num, city, users.postal_code from users
            inner join address
            on users.postal_code = $1`,
        [parent.postal_code]
      )
      return rows[0]
    }
  }
}
