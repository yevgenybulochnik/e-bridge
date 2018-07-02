import * as Knex from 'knex';

exports.seed = (knex: any, Promise: Promise<any>) => seed(knex)

function seed(knex: Knex) {
  return knex('users').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', 1, FALSE);"
      )
    })
    .then(() => {
      return knex('users').insert({
        firstname: 'yevgeny',
        lastname: 'bulochnik'
      })
    })
}
