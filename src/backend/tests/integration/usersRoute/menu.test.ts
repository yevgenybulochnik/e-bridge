import * as Mocha from 'mocha';
import * as Chai from 'chai';

import server from '@backend/server'
import { dbConn } from '@backend/db/knex'
import * as helper from '../helper'

const chaiHttp = require('chai-http')
const expect = Chai.expect
Chai.use(chaiHttp)

describe('Get /users/:id/menu', () => {
  let token: string
  before(() => {
    return dbConn.migrate.rollback()
      .then(() => { return dbConn.migrate.latest() })
      .then(() => { return dbConn.seed.run() })
      .then(() => { return helper.login() })
      .then(response => token = response.body.token)
  })

  after(() => {
    return dbConn.migrate.rollback()
  })

  describe('Success admin menu response', () => {
    let response: any
    before(async () => {
      response = await Chai.request(server)
        .get('/api/v1/users/1/menu')
        .set('authorization', `Bearer ${token}`)
    })
    it('should exist', () => {
      expect(response).to.exist
      console.log(response.body)
    })
    it('should be type json')
  })
})
