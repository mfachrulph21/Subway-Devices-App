const userController = require('../controllers/userController')

const router = require('express').Router()

router.get('/', userController.readAll)
router.post('/', userController.create)
router.get('/:id', userController.readById)
router.delete('/:id', userController.delete)


module.exports = router