const { Router } = require('express')

const router = Router()

router.post('/sign-up', (req, res, next) => {
  console.log('api sign-up post')
  res.sendStatus(200)
})

module.exports = router
