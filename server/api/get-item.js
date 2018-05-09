const { Router } = require('express')
const router = Router()
const db = require('../models/index.js')

router.get('/items/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const item = await db.Item.findById(id)
    return res.status(200).json(item)
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
