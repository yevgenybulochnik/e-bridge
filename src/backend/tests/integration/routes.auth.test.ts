import * as Mocha from 'mocha';
import * as Chai from 'chai';

import server from '../../server';
import { dbConn } from '../../db/knex';
import * as localAuth from '../../auth/local';

const chaiHttp = require('chai-http')
const expect = Chai.expect
Chai.use(chaiHttp)

describe('Routes : /auth', () => {
  before(() => {
    return dbConn.migrate.rollback()
      .then(() => { return dbConn.migrate.latest() })
      .then(() => { return dbConn.seed.run() })
  })

  after(() => {
    return dbConn.migrate.rollback()
  })

  describe('POST /auth/register', () => {
    describe('Server Success Response', () => {
      let response: any;
      before(async () => {
        response = await Chai.request(server)
          .post('/api/v1/auth/register')
          .send({
            firstname: 'John',
            lastname: 'smith',
            email: 'john.smith@test.com',
            password: 'johnsmithpass#1'
          })
      })
      it('should exist', () => {
        expect(response).to.exist
      })
      it('should be type json', () => {
        expect(response.type).to.equal('application/json')
      })
      it('should contain status and token keys in body', () => {
        expect(response.body).to.have.all.keys('status', 'token')
      })
      it('should return status code 200', () => {
        expect(response.status).to.equal(200)
      })
      it('should return status success in body', () => {
        expect(response.body.status).to.equal('success')
      })
    })
    describe('Server Error user email exists response', () => {
      let errorResponse: any;
      before(async () => {
        errorResponse = await Chai.request(server)
          .post('/api/v1/auth/register')
          .send({
            firstname: 'John',
            lastname: 'smith',
            email: 'john.smith@test.com',
            password: 'johnsmithpass#1'
          })
      })
      it('should exist', () => {
        expect(errorResponse).to.exist
      })
      it('should be type json', () => {
        expect(errorResponse.type).to.equal('application/json')
      })
      it('should return status code 500', () => {
        expect(errorResponse.status).to.equal(500)
      })
      it('should return status error in body', () => {
        expect(errorResponse.body.status).to.equal('error')
      })
      it('should state email already exists in body message', () => {
        expect(errorResponse.body.message).to.equal('User email already exists')
      })
    })
  })
})

