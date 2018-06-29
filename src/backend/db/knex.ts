import * as config from '../knexfile';
const env = process.env.NODE_ENV || 'development';

module.exports = require('knex')(config);
