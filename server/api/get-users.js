const { Router } = require('express')
const router = Router()
const db = require('../models/index.js')

router.get('/users', async (req, res, next) => {
  const users = await db.User.findAll()
  res.json(users)
})

module.exports = router
