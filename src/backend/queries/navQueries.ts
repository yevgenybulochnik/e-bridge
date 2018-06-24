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

export function queryNavItems() {
  return pg.select().table('menu_items')
}

export default pg
