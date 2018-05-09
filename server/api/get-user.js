const { Router } = require('express')
const db = require('../models/index.js')
const router = Router()

router.get('/users/:username', async (req, res, next) => {
  console.log('get user')
  const { username } = req.params
  try {
    const user = await db.User.findOne({
      where: { username }
    })

    if (user === null) {
      return res.status(404).json({ message: "Not Found" })
    }
    return res.json(user)
  } catch (error) {
    console.error(error)
    return res.json({ message: e })
  }
  res.sendStatus(200)
})

module.exports = router
