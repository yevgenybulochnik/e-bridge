import * as Mocha from 'mocha';
import * as Chai from 'chai';

import server from '../../server';
import { dbConn } from '../../db/knex';

const chaiHttp = require('chai-http')
const expect = Chai.expect
Chai.use(chaiHttp)

describe('routes : auth', () => {
  describe('POST /auth/register', () => {
    it('should register a new user')
  })
})

