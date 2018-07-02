import * as moment from 'moment';
import * as jwt from 'jsonwebtoken';

export function encodeToken(user: any) {
  const payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user.id
  }
  return jwt.sign(payload, process.env.TOKEN_SECRET)
}

export function decodeToken(token: string) {
  const payload = jwt.verify(token, process.env.TOKEN_SECRET, (err, decode) => {
    console.log(decode)
  })
}
