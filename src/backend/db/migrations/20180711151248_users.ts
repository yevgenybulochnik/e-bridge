import * as Knex from "knex";

export function up(knex: Knex, promise: Promise<any>) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('firstname').notNullable()
    table.string('lastname').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
  })
};

export function down(knex: Knex, promise: Promise<any>) {
  return knex.schema.dropTable('users')
};
