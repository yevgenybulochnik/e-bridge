import * as Knex from 'knex';
import * as bcrypt from 'bcryptjs';

exports.seed = (knex: any, Promise: Promise<any>) => seed(knex)

function seed(knex: Knex) {
  return knex('users').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', 1, FALSE);"
      )
    })
    .then(() => {
      const pass = 'password'
      return bcrypt.hash(pass, 10)
    })
    .then((hash) => {
      return knex('users').insert({
        firstname: 'yevgeny',
        lastname: 'bulochnik',
        email: 'yevgeny.bulochnik@gmail.com',
        password: hash
      })
    })
}
