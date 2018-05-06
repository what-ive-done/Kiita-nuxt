const { Router } = require('express')

const router = Router()

router.get('/users/:user_id/item/:item_id', (req, res, next) => {
  console.log('api one User')
  res.sendStatus(200)
})

module.exports = router
