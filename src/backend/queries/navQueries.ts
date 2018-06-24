import * as knex from 'knex';

const pg = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'ebridge'
  }
})

export default pg
