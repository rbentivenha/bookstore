const db = require('../config/database')

module.export = {
  getAuthorization: async cpf => {
    try {
      const { rows } = await db.query(
        `
                  select * from users
                  where user.cpf = $1
              `,
        [cpf]
      )
      return rows[0]
    } catch (err) {
      console.error(err)
    }
  }
}
