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
  .forEach(file => {
    router.use(require(path.join(__dirname, file)))
  })


module.exports = router
