import * as Mocha from 'mocha';
import * as Chai from 'chai';

import * as localAuth from '../../auth/local';

const expect = Chai.expect


describe('EncodeToken Function', () => {
  it('should return a token', () => {
    const result = localAuth.encodeToken({id: 1})
    expect(result).to.exist
  })
  it('should return a payload', () => {
    const result = localAuth.encodeToken({id: 1})
    localAuth.decodeToken(result)
  })
})
