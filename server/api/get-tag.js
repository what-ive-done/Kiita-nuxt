const { Router } = require('express')
const router = Router()
const db = require('../models')

router.get('/tags/:name', async (req, res, next) => {
  const { name } = req.params
  try {
    const tag = await db.Tag.findOne({ where: { name } })
    res.status(200).json(tag)
  } catch (error) {
    res.json({ message: error })
  }
  res.sendStatus(200)
})

module.exports = router
