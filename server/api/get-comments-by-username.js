const { Router } = require('express')
const router = Router()
const db = require('../models/index.js')

router.get('/users/:username/comments', async (req, res, next) => {
  const { username, itemId } = req.params
  try {
    const user = await db.User.findOne({
      where: { username },
      include: [{ model: db.Comment }]
    })
    res.json(user)
  } catch (error) {
    res.json({ message: error })
  }
  res.sendStatus(200)
})

module.exports = router
