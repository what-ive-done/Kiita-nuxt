const { Router } = require('express')
const router = Router()
const db = require('../models/index.js')

router.get('/items', async (req, res, next) => {
  const { itemId } = req.params
  try {
    const item = await db.Item.findAll({
      offset: 0,
      limit: 10
    })
    return res.status(200).json(item)
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
