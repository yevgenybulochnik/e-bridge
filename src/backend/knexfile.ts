import * as path from 'path';

const BASE_PATH = path.join(__dirname, 'db')

module.exports =  {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        database: 'ebridge',
        user: 'postgres',
        password: 'postgres'
      },
      migrations: {
        directory: path.join(BASE_PATH, 'migrations')
      }
    }
}
