const { Router } = require('express')

const router = Router()

router.get('/tags', (req, res, next) => {
  console.log('api one User')
  res.sendStatus(200)
})

module.exports = router
