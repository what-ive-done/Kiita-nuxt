const { Router } = require('express')
const router = Router()

router.post('/auth/logout', async (req, res, next) => {
  try {
    res.json({ message: 'ok' })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
