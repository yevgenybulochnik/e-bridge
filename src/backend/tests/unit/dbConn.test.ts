import * as Mocha from 'mocha';
import * as Chai from 'chai';

import { dbConn } from '../../db/knex';

const expect = Chai.expect

describe('Basic knex database user query', () => {
  it('Should resolve', async () => {
    const queryResult = await dbConn('users').where('id', 1).first()
    console.log(queryResult)
    expect(queryResult.firstname).to.equal('yevgeny')
    dbConn.destroy()
  })
})
