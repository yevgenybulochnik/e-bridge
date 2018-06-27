import db from '../db';

export function queryNavItems() {
  return db.select().table('menu_items')
}
