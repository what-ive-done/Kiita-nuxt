const { Router } = require('express')
const router = Router()
const db = require('../models')

router.get('/tags/:tag_id/items', async (req, res, next) => {
  try {
    const tag = await db.Tag.findAll({
      include: [
        {
          model: db.Item,
          through: { attributes: [] }
        }
      ]
    })
    return res.json(tag)
  } catch (error) {
    res.json({ message: error })
  }
  res.sendStatus(200)
})

module.exports = router
