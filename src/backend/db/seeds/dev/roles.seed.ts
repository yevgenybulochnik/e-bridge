import * as Knex from "knex";

export function seed(knex: Knex) {
  return knex('roles').del()
    .then(() => {
      return knex('roles').insert([
        {role: 'admin', permission_level: 3},
        {role: 'pharm', permission_level: 2}
      ])
    })
}
