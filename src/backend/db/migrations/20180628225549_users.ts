import * as Knex from "knex";

exports.up = function (knex: Knex, Promise: Promise<any>) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
  })
};

exports.down = function (knex: Knex, Promise: Promise<any>) {
  return knex.schema.dropTable('users');
};
