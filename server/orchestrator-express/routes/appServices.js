const appController = require('../controllers/appController')
const router = require('express').Router()


router.get('/', appController.readAllItems)
router.post('/', appController.addItem)
router.get('/:id', appController.readItem)
router.put('/:id', appController.editItem )
router.delete('/:id', appController.deleteItem)

module.exports = router