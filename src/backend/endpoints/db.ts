import * as knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'ebridge'
  }
})

export default db
