import * as Mocha from 'mocha';
import * as Chai from 'chai';

import { encodeToken, decodeToken, asyncDecode } from '@backend/endpoints/jwtProcessing'

const expect = Chai.expect

describe('Auth: local', () => {

  describe('encodeToken()', () => {
    it('should return a token', () => {
      const result = encodeToken({id: 1})
      expect(result).to.exist
    })

    it('should be a string', () => {
      const result = encodeToken({id: 1})
      expect(result).to.be.string
    })
  })

  describe('decodeToken() sync function', () => {
    it('should return a payload', () => {
      const token = encodeToken({id: 1})
      decodeToken(token, (err: any, res: any) => {
        expect(err).not.exist
        expect(res.sub).to.equal(1)
      })
    })
  })

  describe('asyncDecode()', () => {
    it('should return async payload', async () => {
      const token = encodeToken({id: 1})
      const payload: any = await asyncDecode(token)
      expect(payload.sub).to.equal(1)
    })
  })

})
