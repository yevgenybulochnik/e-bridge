import * as Knex from "knex";

export function up(knex: Knex, promise: Promise<any>){
  return knex.schema.createTable('roles', (table) => {
    table.string('role').notNullable()
    table.integer('permission_level').notNullable()
  })
}

export function down(knex: Knex, promis: Promise<any>) {
  return knex.schema.dropTable('roles')
}
