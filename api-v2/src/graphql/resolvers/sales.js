const db = require('../../config/database')

module.exports = {
  query: {
    sales: async () => {
      const { rows } = await db.query(`
      select sell.id, products.id as pid, products.price, products.title, products.descrip, customer.fname as cfname, customer.lname as clname, colab.fname as efname, colab.lname as elname from sell
            inner join products
            on products.id = sell.product_id
            inner join users as customer
            on  sell.client_id = customer.cpf
            inner join users as colab
            on sell.employee_id = colab.cpf
        `)
      return rows
    }
  },
  mutation: {},
  data_loaders: {}
}
