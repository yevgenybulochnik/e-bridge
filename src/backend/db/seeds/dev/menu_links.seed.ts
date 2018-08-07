import * as Knex from 'knex';

let links = [
  {link_name: 'Designer', link_path: '/designer', link_type: 'general', permission_level: 2 },
  {link_name: 'Dashboard', link_path: '/dashboard', link_type: 'general', permission_level: 1 },
  {link_name: 'Register', link_path: '/register', link_type: 'admin', permission_level: 3 },
]

export function seed(knex: Knex) {
  return knex('menu_links').del()
    .then(() => {
      return knex('menu_links').insert(links)
    })
}
