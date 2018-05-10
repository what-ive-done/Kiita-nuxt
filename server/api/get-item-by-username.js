const { Router } = require('express')
const router = Router()
const db = require('../models/index.js')

router.get('/users/:username/items/:item_id', async (req, res, next) => {
  console.log('get item by username')
  const { username, item_id:itemId } = req.params
  console.log('username => ', username)
  try {
    const user = await db.User.findOne({ where: { username } })
    const item = await db.Item.findOne({ where: { UserId: user.id, id: itemId }})
    return res.status(200).json(item)
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
