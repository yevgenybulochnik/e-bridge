import * as http from 'http'
import * as DotEnv from 'dotenv'
DotEnv.config()

import App from './express'

const PORT = process.env.BACKEND_PORT || 3000
const server = http.createServer(App)

server.listen(PORT)
//server.on('listening', onListen)

function onListen() {
  console.log(`Listening on Port: ${PORT}`)
}

export default server
