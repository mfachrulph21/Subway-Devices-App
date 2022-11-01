const usersController = require('../controllers/usersController')
const router = require('express').Router()

router.get('/', usersController.readAlluser)
router.post('/', usersController.createUser)
router.get('/:id', usersController.readUserById)
router.delete('/:id', usersController.deleteUser)


module.exports = router