import * as Mocha from 'mocha';
import * as Chai from 'chai';

import server from '@backend/server'
import { dbConn } from '@backend/db/knex'
import * as helper from '../helper'

const chaiHttp = require('chai-http')
const expect = Chai.expect
Chai.use(chaiHttp)

describe('POST /auth/register', () => {
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

  describe('Server success response', () => {
    let response: any
    before(async () => {
      response = await Chai.request(server)
        .post('/api/v1/auth/register')
        .set('authorization', `Bearer ${token}`)
        .send({
          firstname: 'john', 
          lastname: 'smith', 
          email: 'john.smith@test.com',
          password: 'johnsmithpass'
        })
    })
    it('should exist', () => {
      expect(response).to.exist
    })
    it('should be type json', () => {
      expect(response.type).to.equal('application/json')
    })
    it('should contain status and message keys in body', () => {
      expect(response.body).to.have.all.keys('status', 'message')
    })
    it('should return status code 200', () => {
      expect(response.status).to.equal(200)
    })
    it('should return status: "success" in body', () => {
      expect(response.body.status).to.equal('success')
    })
    it('should return message: "User registered" in body', () => {
      expect(response.body.message).to.equal('User registered')
    })
  })
})
