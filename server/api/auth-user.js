const jwt = require('jsonwebtoken');
const { Router } = require('express')
const router = Router()
const db = require('../models/index.js')

router.get('/auth/user', async (req, res, next) => {
  const token = req.headers.authorization
  try {
    console.log('Authorization => ', token)
    const accessToken = token.split(' ')[1]

    const decoded = jwt.verify(accessToken, 'SECRET')
    console.log(decoded)
    const { id } = decoded
    const user = await db.User.findById(id)
    res.json({ user })
  } catch (error) {
    console.error(error)
    return res.json({ message: e })
  }
})

module.exports = router
