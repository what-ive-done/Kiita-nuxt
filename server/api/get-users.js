const { Router } = require('express')
const router = Router()
const db = require('../models/index.js')

router.get('/users', async (req, res, next) => {
  try {
    const { offset = 0, limit = 30 } = req.query
    const users = await db.User.findAll({
      offset,
      limit
    })
    return res.json(users)
  } catch (e) {
    console.log(e)
    return res.json({ message: e })
  }
})

module.exports = router
