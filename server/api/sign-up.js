const { Router } = require('express')
const db = require('../models')
const router = Router()

router.post('/sign-up', async (req, res, next) => {
  try {
    const { email, username, password } = req.body
    const savedUser = await db.User.create({
      email, username, password
    })
    res.status(200).json(savedUser)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
