import { Request, Response, NextFunction } from 'express';
import * as database from '../../models'

export function getUserMenu(req: Request, res: Response, next: NextFunction) {
  const { userID } = req.params
  return database.userMenuLinks(userID)
    .then(menuLinks => {
      res.status(200).json({
        status: 'success',
        links: menuLinks
      })
    })
    .catch(err => {
      res.status(500).json({
        status: 'error',
        message: err.message
      })
    })
}
