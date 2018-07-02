import * as config from '../knexfile';
import * as Knex from 'knex';
const env = process.env.NODE_ENV || 'development';

export const dbConn = Knex((config as any)[env])
