const appController = require('../controllers/appController')
const router = require('express').Router()


router.get('/items', appController)

module.exports = router