const { Router } = require('express')
const router = Router()
const db = require('../models/index.js')

router.get('/users', async (req, res, next) => {
  try {
    console.log(db)
    const users = await db.User.findAll()
    res.json(users)
  } catch (e) {
    console.log(e)
    res.json({ message: e })
  }
})

module.exports = router
