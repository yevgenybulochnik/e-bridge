import * as moment from 'moment';
import * as jwt from 'jsonwebtoken';

export function encodeToken(user: any) {
  const payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user.id,
  }
  return jwt.sign(payload, process.env.TOKEN_SECRET)
}

export function decodeToken(token: string, callback: any) {
  const payload: any = jwt.verify(token, process.env.TOKEN_SECRET)
  const now = moment().unix()
  // check if the token has expired
  if (now > payload.exp) callback('Token has expired.')
  else callback(null, payload)
}

export async function asyncDecode(token:string) {
  return jwt.verify(token, process.env.TOKEN_SECRET, (err, res) => {
    return res
  })
}
