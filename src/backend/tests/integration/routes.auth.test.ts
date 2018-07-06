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
  describe('Post /auth/login', () => {
    describe('Successful login response', () => {
      let response: any
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
      it('should contain status and token keys in body', () => {
        expect(response.body).to.have.all.keys('status', 'token')
      })
      it('should return status code 200', () => {
        expect(response.status).to.equal(200)
      })
      it('should return status success in body', () => {
        expect(response.body.status).to.equal('success')
      })
      it('should return a token, decode should have email and user id', async () => {
        let payload: any = await localAuth.asyncDecode(response.body.token)
        expect(payload).to.have.all.keys(['exp', 'iat', 'sub', 'email'])
        expect(payload.email).to.equal('yevgeny.bulochnik@gmail.com')
        expect(payload.sub).to.equal(1)
      })
    })
    describe('Error login response invalid password', () => {
      let response: any
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
      it('should contain status and message keys', () => {
        expect(response.body).to.have.all.keys(['status', 'message'])
      })
      it('should return status error in body', () => {
        expect(response.body.status).to.equal('error')
      })
      it('should return status code 500', () => {
        expect(response.status).to.equal(500)
      })
      it('should return message Invalid password', () => {
        expect(response.body.message).to.equal('Invalid password')
      })
    })
    describe('Error login response invalid email', () => {
      let response: any
      before(async () => {
        response = await Chai.request(server)
          .post('/api/v1/auth/login')
          .send({
            email: 'abc123@test.com',
            password: 'wrongpass'
          })
      })
      it('should exist', () => {
        expect(response).to.exist
      })
      it('should be type json', () => {
        expect(response.type).to.equal('application/json')
      })
      it('should contain status and message keys', () => {
        expect(response.body).to.have.all.keys(['status', 'message'])
      })
      it('should return status error in body', () => {
        expect(response.body.status).to.equal('error')
      })
      it('should return status code 500', () => {
        expect(response.status).to.equal(500)
      })
      it('should return message User email not found', () => {
        expect(response.body.message).to.equal('User email not found')
      })
    })
  })
})

