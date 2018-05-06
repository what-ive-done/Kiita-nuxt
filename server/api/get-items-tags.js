const { Router } = require('express')

const router = Router()

router.post('/items/:item_id/tags', (req, res, next) => {
  console.log('api one User')
  res.sendStatus(200)
})

module.exports = router
