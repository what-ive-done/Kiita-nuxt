const { Router } = require('express')
const router = Router()
const db = require('../models')

router.get('/items/:id/tags', async (req, res, next) => {
  try {
    const { id } = req.params
    const item = await db.Item.findById(id, {
      include: [
        {
          model: db.Tag,
          through: { attributes: [] }
        }
      ]
    })
    return res.json(item)
  } catch (error) {
    console.log(error)
    res.json({ message: error })
  }
  res.sendStatus(200)
})

module.exports = router
