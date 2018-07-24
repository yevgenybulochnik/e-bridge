import { dbConn } from '../db/knex';
import * as bcrypt from 'bcryptjs';

export function getUserByEmail(email: string) {
  return dbConn('users')
    .where({email})
    .first()
}

export function createUser(firstname: string, lastname: string, email: string, password: string) {
  return getUserByEmail(email)
    .then(user => {
      if (user) throw 'User email already exists'
      return bcrypt.hash(password, parseInt(process.env.WORK_FACTOR))
    })
    .then(passwordHash => {
      return dbConn('users')
        .insert({
          firstname,
          lastname,
          email,
          password: passwordHash
        })
        .returning(['id'])
    })
}

export function verifyUser(email: string, password: string) {
  let validUser: any;
  return getUserByEmail(email)
    .then(user => {
      if (!user) throw 'User email not found'
      validUser = user
      return bcrypt.compare(password, user.password)
    })
    .then(passwordIsValid => {
      if (!passwordIsValid) throw 'Invalid Email/Password'
      let jwtClaims = { id: validUser.id }
      return jwtClaims
    })
}
