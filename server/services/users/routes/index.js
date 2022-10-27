const userController = require('../controllers/userController')

const router = require('express').Router()

router.get('/', userController.readAll)
router.get('/:id', userController.readById)
router.post('/', userController.create)
router.delete('/:id', userController.delete)


module.exports = router