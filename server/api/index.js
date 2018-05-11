const fs = require('fs')
const path      = require('path');

const { Router } = require('express')
const router = Router()
const basename  = path.basename(__filename);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(route => {
    router.use(require(`./${route}`))
  })


module.exports = router
