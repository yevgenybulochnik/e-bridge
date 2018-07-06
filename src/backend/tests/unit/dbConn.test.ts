import * as Mocha from 'mocha';
import * as Chai from 'chai';

import { dbConn } from '../../db/knex';

const expect = Chai.expect

describe('Basic knex database user query', () => {
  before(() => {
    return dbConn.migrate.rollback()
      .then(() => { return dbConn.migrate.latest() })
      .then(() => { return dbConn.seed.run() })
  })

  after(() => {
    return dbConn.migrate.rollback()
  })

  it('Should resolve', async () => {
    const queryResult = await dbConn('users').where('id', 1).first()
    expect(queryResult.firstname).to.equal('yevgeny')
  })
})
