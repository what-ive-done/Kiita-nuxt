
const express = require('express')
const axios = require('axios')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const api = require('./api')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8080

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  app.use(bodyParser.json())
  app.use('/api', api)
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
