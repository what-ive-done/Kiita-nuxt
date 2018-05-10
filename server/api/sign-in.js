const { Router } = require('express')
const jwt = require('jsonwebtoken');
const router = Router()
const db = require('../models')

router.post('/auth/login', async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await db.User.findOne({
      where: { username, password }
    })
    let accessToken = jwt.sign({ id: user.id, username: user.username }, 'SECRET', { expiresIn: 129600 });
    res.json({ accessToken })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
