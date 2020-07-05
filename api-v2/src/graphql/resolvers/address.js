const db = require('../../config/database')

module.exports = {
  query: {},
  mutation: {
    update_address: async (_, { addressInput }, __) => {
      try {
        const {
          rows: [{ postal_code }]
        } = await db.query(
          `
          update address
          set street_name = $1, street_num = $2, city = $3
          where postal_code = $4
          returning postal_code
        `,
          [
            addressInput.street_name,
            addressInput.street_num,
            addressInput.city,
            addressInput.postal_code
          ]
        )
        return postal_code
      } catch (err) {
        console.error(err)
      }
    },
    create_address: async (_, { addressInput }, ___) => {
      try {
        const {
          rows: [{ postal_code }]
        } = await db.query(
          `
                    insert into address (street_name, street_num, city, postal_code)
                    values ($1, $2, $3, $4)
                    returning postal_code
                `,
          [
            addressInput.street_name,
            addressInput.street_num,
            addressInput.city,
            addressInput.postal_code
          ]
        )
        return postal_code
      } catch (err) {
        console.error(err)
        return addressInput.postal_code
      }
    }
  },
  data_loaders: {}
}
