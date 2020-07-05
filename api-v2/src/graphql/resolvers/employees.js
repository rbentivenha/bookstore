const db = require('../../config/database')

module.exports = {
  query: {
    employees: async (_, __, ___) => {
      const { rows } = await db.query(
        `
        select * from employee
            inner join users
            on employee.ucpf = users.cpf
        `
      )
      return rows
    }
  },
  mutation: {
    create_extra_hour: async (_, { extraHourInput }, __) => {
      try {
        const {
          rows: [{ epis }]
        } = await db.query(
          `
            insert into extra_hours (epis, date, amount)
            values ($1, $2, $3)
            returning epis
          `,
          [extraHourInput.pis, extraHourInput.date, extraHourInput.amount]
        )
        return epis
      } catch (err) {
        console.error(err)
      }
    },
    update_employee: async (_, { employeeInput }, __) => {
      try {
        const {
          rows: [{ pis }]
        } = await db.query(
          `
            update employee
            set salary = $1
            where employee.pis = $2
            returning pis
          `,
          [employeeInput.salary, employeeInput.pis]
        )
        return pis
      } catch (err) {
        console.error(err)
      }
    },
    create_employee: async (_, { employeeInput }, ___) => {
      try {
        const {
          rows: [{ pis }]
        } = await db.query(
          `
          insert into employee (ucpf, salary, pis)
          values ($1, $2, $3)
          returning pis
          `,
          [employeeInput.ucpf, employeeInput.salary, employeeInput.pis]
        )
        return pis
      } catch (err) {
        console.error(err)
        return employeeInput.pis
      }
    }
  },
  data_loaders: {
    sales: async (parent, __, ___) => {
      const { rows } = await db.query(
        `
        select * from items_sale
          inner join sale
          on items_sale.said = sale.id
          inner join products
          on items_sale.pid = products.id
          where sale.epis = $1
        `,
        [parent.pis]
      )
      return rows
    },
    registredProducts: async (parent, __, ___) => {
      const { rows } = await db.query(
        `
        select * from products
          inner join item_reg
          on item_reg.id = products.regid
          where item_reg.epis = $1
        `,
        [parent.pis]
      )
      return rows
    },
    address: async (parent, __, ___) => {
      const { rows } = await db.query(
        `
        select * from address
          where address.postal_code = $1
        `,
        [parent.postal_code]
      )
      return rows[0]
    },
    extra_hours: async (parent, __, ___) => {
      const { rows } = await db.query(
        `
        select * from extra_hours
          where extra_hours.epis = $1
        `,
        [parent.pis]
      )
      return rows
    }
  }
}
