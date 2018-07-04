import * as path from 'path';

function adjustedPath() {
  let projectRoot = 'e-bridge'
  let processBasename = path.basename(process.cwd())
  if (processBasename == projectRoot) {
    let base = process.cwd()
    let pathAdjusted = path.join(base, 'src', 'backend', 'db')
    return pathAdjusted
  } else {
    return path.join(process.cwd(), 'db')
  }
}

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'ebridge',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: path.join(adjustedPath(), 'migrations')
    },
    seeds: {
      directory: path.join(adjustedPath(), 'seeds', 'dev')
    }
  }
}
