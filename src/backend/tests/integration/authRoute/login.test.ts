import * as Mocha from 'mocha';
import * as Chai from 'chai';

import server from '@backend/server'
import { dbConn } from '@backend/db/knex'
import { asyncDecode } from '@backend/endpoints/jwtProcessing'

const chaiHttp = require('chai-http')
const expect = Chai.expect
Chai.use(chaiHttp)

describe('POST /auth/login', () => {
  before(() => {
    return dbConn.migrate.rollback()
      .then(() => { return dbConn.migrate.latest() })
      .then(() => { return dbConn.seed.run() })
  })

  after(() => {
    return dbConn.migrate.rollback()
  })

  describe('Succesful login response', () => {
    let response: any;

    before(async () => {
      response = await Chai.request(server)
        .post('/api/v1/auth/login')
        .send({
          email: 'yevgeny.bulochnik@gmail.com',
          password: 'password'
        })
    })

    it('should exist', () => {
      expect(response).to.exist
    })
    it('should be type json', () => {
      expect(response.type).to.equal('application/json')
    })
    it('should contain status, id, and token keys in body', () => {
      expect(response.body).to.have.all.keys(['status', 'token', 'id'])
    })
    it('should return status code 200', () => {
      expect(response.status).to.equal(200)
    })
    it('should retrn status: "success" in body', () => {
      expect(response.body.status).to.equal('success')
    })
    it('should return a token: jwttoken with user id in body', async () => {
      const token = response.body.token
      const payload: any = await asyncDecode(token)
      expect(payload).to.have.all.keys('iat', 'exp', 'sub')
      expect(payload.sub).to.equal(1)
    })
  })

  describe('Error login response, invalid password', () => {
    let response: any;

    before(async () => {
      response = await Chai.request(server)
        .post('/api/v1/auth/login')
        .send({
          email: 'yevgeny.bulochnik@gmail.com',
          password: 'wrongpass'
        })
    })

    it('should exist', () => {
      expect(response).to.exist
    })
    it('should be type json', () => {
      expect(response.type).to.equal('application/json')
    })
    it('should contain status and message keys in body', () => {
      expect(response.body).to.have.all.keys(['status', 'message'])
    })
    it('should return status code 500', () => {
      expect(response.status).to.equal(500)
    })
    it('should return status: "error" in body', () => {
      expect(response.body.status).to.equal('error')
    })
    it('should return message: "Invalid Email/Password"', () => {
      expect(response.body.message).to.equal('Invalid Email/Password')
    })
  })

  describe('Error login response, invalid email', () => {
    let response: any;

    before(async () => {
      response = await Chai.request(server)
        .post('/api/v1/auth/login')
        .send({
          email: 'john.doe@test.com',
          password: 'password'
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
    it('should return status code 500', () => {
      expect(response.status).to.equal(500)
    })
    it('should return status: "error" in body', () => {
      expect(response.body.status).to.equal('error')
    })
    it('shold return User email not found', () => {
      expect(response.body.message).to.equal('User email not found')
    })
  })
})
