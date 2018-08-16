import * as Knex from 'knex';
import * as bcrypt from 'bcryptjs';

export function seed(knex: Knex) {
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
      return knex('users').insert([{
        firstname: 'yevgeny',
        lastname: 'bulochnik',
        email: 'yevgeny.bulochnik@gmail.com',
        role: 'admin',
        password: hash
      }, {
        firstname: 'jane',
        lastname: 'doe',
        email: 'jane.doe@test.com',
        role: 'pharm',
        password: hash
      }, {
        firstname: 'john',
        lastname: 'doe',
        email: 'john.doe@test.com',
        role: 'COS',
        password: hash
      }
      ])
    })
}
