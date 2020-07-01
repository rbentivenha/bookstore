const db = require('../../config/database')

module.exports = {
  query: {},
  mutation: {
    login: async (_, { loginInput }, __) => {
      try {
        const { rows }= await db.query(
          `
        select * from users
        where users.cpf = $1
        `,
          [loginInput.cpf]
        )
        return rows[0]
      } catch (err) {
        console.error(err)
      }
    }
  },
  data_loaders: {}
}
