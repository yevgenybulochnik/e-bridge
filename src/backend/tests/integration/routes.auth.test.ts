import * as Mocha from 'mocha';
import * as Chai from 'chai';

import server from '../../server';
import { dbConn } from '../../db/knex';
import * as localAuth from '../../auth/local';

const chaiHttp = require('chai-http')
const expect = Chai.expect
Chai.use(chaiHttp)

describe('routes : auth', () => {
  beforeEach(() => {
    return dbConn.migrate.rollback()
      .then(() => { return dbConn.migrate.latest() })
      .then(() => { return dbConn.seed.run() })
  })

  afterEach(() => {
    return dbConn.migrate.rollback()
  })

  describe('POST /auth/register', () => {
    it('should register a new user', () => {
      Chai.request(server)
        .post('/api/v1/auth/register')
        .send({
          firstname: 'John',
          lastname: 'smith',
          email: 'john.smith@test.com',
          password: 'johnsmithpass#1'
        })
        .end((err, res) => {
          expect(err).to.not.exist
          expect(res.status).to.equal(200)
          expect(res.type).to.equal('application/json')
          expect(res.body).to.have.all.keys('status', 'token')
          expect(res.body.status).to.equal('success')
        })
    })
  })
})

