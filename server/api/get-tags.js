const { Router } = require('express')
const router = Router()
const db = require('../models')

router.get('/tags', async (req, res, next) => {
  try {
    const tags = await db.Tag.findAll()
    res.json(tags)
  } catch (error) {
    res.json({ message: error })
  }
  res.sendStatus(200)
})

module.exports = router
