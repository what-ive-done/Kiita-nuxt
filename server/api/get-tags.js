const {
  Router
} = require('express')
const router = Router()
const Sequelize = require('sequelize')
const db = require('../models')

router.get('/tags', async (req, res, next) => {
  try {
    const tags = await db.Tag.findAll({
      include: [{
        model: db.Item,
        attributes: ['id']
      }]
    })
    res.json(tags)
  } catch (error) {
    console.log(error)
    res.json({
      message: error
    })
  }
  res.sendStatus(200)
})

module.exports = router
