import * as Chai from 'chai';
import server from '@backend/server'

const chaiHttp = require('chai-http')
const expect = Chai.expect
Chai.use(chaiHttp)

export function login() {
  return Chai.request(server)
    .post('/api/v1/auth/login')
    .send({
      email: 'yevgeny.bulochnik@gmail.com',
      password: 'password'
    })
}
