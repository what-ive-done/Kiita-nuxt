const { Router } = require('express')
const router = Router()
const db = require('../models/index.js')

router.get('/users/:username/items/:item_id', async (req, res, next) => {
  const { username, item_id:itemId } = req.params
  try {
    const user = await db.User.findOne({ where: { username } })
    const item = await db.Item.findOne({
      where: { UserId: user.id, id: itemId },
      include: [
        { all: true },
        {
          model: db.Comment,
          include: [
            {
              model: db.User
            }
          ]
        },
      ]
    })
    return res.status(200).json(item)
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
