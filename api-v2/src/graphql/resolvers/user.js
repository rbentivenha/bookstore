const db = require('../../config/database')

module.exports = {
  query: {},
  mutation: {
    update_user: async (_, { userInput }, __) => {
      try {
        const {
          rows: [{ cpf }]
        } = await db.query(
          `
                update users
                set fname = $1, lname = $2, email = $3, bdate = $4, phone = $5, postal_code = $6, user_type = $7
                where users.cpf = $8
                returning cpf
            `,
          [
            userInput.fname,
            userInput.lname,
            userInput.email,
            userInput.bdate,
            userInput.phone,
            userInput.postal_code,
            userInput.user_type,
            userInput.cpf
          ]
        )
        return cpf
      } catch (err) {
        console.error(err)
      }
    },
    create_user: async (_, { userInput }, __) => {
      try {
        const {
          rows: [{ cpf }]
        } = await db.query(
          `
                insert into users (fname, lname, cpf, email, bdate, phone, postal_code, user_type)
                values ($1, $2, $3, $4, $5, $6, $7, $8)
                returning cpf
            `,
          [
            userInput.fname,
            userInput.lname,
            userInput.cpf,
            userInput.email,
            userInput.bdate,
            userInput.phone,
            userInput.postal_code,
            userInput.user_type
          ]
        )
        return cpf
      } catch (err) {
        console.error(err)
        return userInput.cpf
      }
    }
  },
  data_loaders: {}
}
