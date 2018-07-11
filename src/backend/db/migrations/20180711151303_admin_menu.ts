import * as Knex from "knex";

export function up(knex: Knex, promise: Promise<any>) {
  return knex.schema.createTable('admin_menu', (table) => {
    table.string('menu_item').notNullable()
    table.string('item_path').notNullable()
  })
};

export function down(knex: Knex, promise: Promise<any>) {
  return knex.schema.dropTable('admin_menu') 
};
