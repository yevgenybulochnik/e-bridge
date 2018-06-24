import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import NavRouter from './routes/navRouter'

class App {
  public express: express.Application
  constructor() {
    this.express = express()
    this.middleware()
    this.routes()
  }

  private middleware(): void {
    this.express.use(logger('common'))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({extended: false}))
    this.express.use(cors())
  }

  private routes(): void {
    this.express.use('/api/nav', NavRouter)
  }
}

export default new App().express
