import config from '../knexfile';
import * as knex from 'knex';
const env = process.env.NODE_ENV || 'development';

export const dbConn = knex((config as any)[env])
