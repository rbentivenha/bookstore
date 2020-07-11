const db = require('../../config/database')

module.exports = {
  query: {
    sales: async (_, __, ___) => {
      try {
        const { rows } = await db.query(
          `
          select its.saledate, pr.descrip, pr.price, us.fname as customer, use.fname as employee from sale sa
                inner join products pr
                on sa.pid = pr.id
                inner join users us
                on us.cpf = sa.ucpf
                inner join items_sale its
                on its.said = sa.id
                inner join employee em
                on em.pis = sa.epis
                inner join users use
                on use.cpf = em.ucpf
        `
        )
        return rows
      } catch (err) {
        console.error(err)
      }
    }
  },
  mutation: {
    sell: async (_, { sellInput }, __) => {
      try {
        console.log('sellInput', sellInput)
        const {
          rows: [{ id }]
        } = await db.query(
          `
            insert into sale (pid, ucpf, epis)
            values ($1, $2, $3)
            returning id
          `,
          [sellInput.pid, sellInput.ucpf, sellInput.epis]
        )

        await db.query(
          `
            insert into items_sale (said, pid, saledate)
            values ($1, $2, $3)
          `,
          [id, sellInput.pid, new Date()]
        )

        return id
      } catch (error) {
        console.error(error)
      }
    }
  },
  data_loaders: {}
}
