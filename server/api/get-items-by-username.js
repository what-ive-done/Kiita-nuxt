const { Router } = require('express')
const router = Router()
const db = require('../models/index.js')

router.get('/users/:username/items', async (req, res, next) => {
  const { username, itemId } = req.params
  try {
    const user = await db.User.findOne({ where: { username } })
    const items = await db.Item.findAll({ where: { UserId: user.id }})
    res.json(items)
  } catch (error) {
    res.json({ message: error })
  }
  res.sendStatus(200)
})

module.exports = router
