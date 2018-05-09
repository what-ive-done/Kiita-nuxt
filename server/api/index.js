const { Router } = require('express')
const router = Router()

// Users
router.use(require('./sign-in'))
router.use(require('./sign-up'))
router.use(require('./get-users'))
router.use(require('./get-user'))
// Items
router.use(require('./get-item-by-username'))
router.use(require('./get-items-by-username'))
router.use(require('./get-item'))
router.use(require('./get-items'))
router.use(require('./post-item'))
router.use(require('./patch-item'))
router.use(require('./delete-item'))
// Comments
router.use(require('./post-comment'))
router.use(require('./patch-comment'))
router.use(require('./delete-comment'))
// Tags
router.use(require('./get-tag'))
router.use(require('./get-tags'))
router.use(require('./post-tag'))
// Items - Tags
router.use(require('./relation-item-tag'))
router.use(require('./get-items-tags'))
router.use(require('./get-tags-items'))


module.exports = router
