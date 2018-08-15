import { Request, Response, NextFunction } from 'express';
import * as database from '../../models'

export function formatLinks(menuLink: any[]) {
  return menuLink.map((link, index) => {
    const { link_name, link_path, link_type } = link
    return {linkName: link_name, path: link_path, type: link_type, isActive: false}
  })
}

export function getUserMenu(req: Request, res: Response, next: NextFunction) {
  const { userID } = req.params
  return database.userMenuLinks(userID)
    .then(menuLinks => {
      const adjustedLinks = formatLinks(menuLinks)
      res.status(200).json({
        status: 'success',
        links: adjustedLinks
      })
    })
    .catch(err => {
      res.status(500).json({
        status: 'error',
        message: err.message
      })
    })
}
