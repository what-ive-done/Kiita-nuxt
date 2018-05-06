const { Router } = require('express')

const router = Router()

router.post('/sign-in', (req, res, next) => {
  console.log('api post')
  res.sendStatus(200)
})

module.exports = router
