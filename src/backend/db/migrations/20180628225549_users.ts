import * as Knex from "knex";

exports.up = function (knex: Knex, Promise: Promise<any>) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id');
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
  })
};

exports.down = function (knex: Knex, Promise: Promise<any>) {
  return knex.schema.dropTable('user');
};
