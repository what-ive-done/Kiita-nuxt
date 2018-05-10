const { Router } = require('express')
const router = Router()
const db = require('../models')

router.get('/tags/:name/items', async (req, res, next) => {
  try {
    const { name } = req.params
    console.log('name => ', name)
    const tag = await db.Tag.findOne({
      where: { name },
      include: [
        {
          model: db.Item,
          through: { attributes: [] }
        }
      ]
    })
    return res.json(tag)
  } catch (error) {
    console.log(error)
    res.json({ message: error })
  }
  res.sendStatus(200)
})

module.exports = router
