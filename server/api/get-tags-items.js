const { Router } = require('express')

const router = Router()

router.post('/tags/:tag_id/items', (req, res, next) => {
  console.log('api one User')
  res.sendStatus(200)
})

module.exports = router
