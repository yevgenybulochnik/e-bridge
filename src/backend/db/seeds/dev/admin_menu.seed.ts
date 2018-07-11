import * as Knex from 'knex';

export function seed(knex: Knex) {
  return knex('admin_menu').del()
    .then(() => {
      return knex('admin_menu').insert({
        menu_item: 'Register',
        item_path: '/register'
      })
    })
}
