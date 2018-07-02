import * as Mocha from 'mocha';
import * as Chai from 'chai';

import * as localAuth from '../../auth/local';

const expect = Chai.expect

describe('Auth: local', () => {

  describe('encodeToken()', () => {
    it('should return a token', () => {
      const result = localAuth.encodeToken({id: 1})
      expect(result).to.exist
    })

    it('should be a string', () => {
      const result = localAuth.encodeToken({id: 1})
      expect(result).to.be.string
    })
  })

  describe('decodeToken()', () => {
    it('should return a payload', () => {
      const token = localAuth.encodeToken({id: 1})
      localAuth.decodeToken(token, (err: any, res: any) => {
        expect(err).not.exist
        expect(res.sub).to.equal(1)
      })
    })
  })

})
