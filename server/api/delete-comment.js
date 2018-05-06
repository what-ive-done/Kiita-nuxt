const { Router } = require('express')

const router = Router()

router.delete('/users/:user_id/items/:item_id/comments/:comment_id', (req, res, next) => {
  console.log('api one User')
  res.sendStatus(200)
})

module.exports = router
