import * as Knex from "knex";

export function up(knex: Knex, promise: Promise<any>) {
  return knex.schema.createTable('menu_links', (table) => {
    table.string('link_name').notNullable()
    table.string('link_path').notNullable()
    table.string('link_type').notNullable()
    table.integer('permission_level').notNullable()
  })
};

export function down(knex: Knex, promise: Promise<any>) {
  return knex.schema.dropTable('menu_links')
};
