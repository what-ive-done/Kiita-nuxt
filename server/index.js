
const express = require('express')
const axios = require('axios')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8080

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.get('/api/items', async (req, res) => {
  try {
    const { data } = await axios.get('http://127.0.0.1:3000/users/ccd1d8fa-5911-46e5-be2f-ef7a73dbd6b7/items')
    res.json(data)
  } catch (error) {
    console.error(error)
    res.json({ message: 'error' })
  }
})

app.get('/api/items/:id', async (req, res) => {
  try {
    console.log(req.params)
    const { data } = await axios.get(`http://127.0.0.1:3000/items/${req.params.id}?_embed=comments`)
    res.json(data)
  } catch (error) {
    res.json({ message: 'error' })
  }
})
async function start() {
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
