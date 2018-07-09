import * as Knex from "knex";

exports.up = function (knex: Knex, promise: Promise<any>) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('firstname').notNullable();
      table.string('lastname').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
    }),
    knex.schema.createTable('admin_menu', (table) => {
      table.string('menu_item').notNullable();
      table.string('item_path').notNullable();
    })
  ])
};

exports.down = function (knex: Knex, promise: Promise<any>) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('admin_menu'),
  ])
};
