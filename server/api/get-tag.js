const { Router } = require('express')

const router = Router()

router.get('/tags/:tag_id', (req, res, next) => {
  console.log('api one User')
  res.sendStatus(200)
})

module.exports = router
