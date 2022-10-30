const appController = require('../controllers/appController')
const router = require('express').Router()


router.get('/', appController.readAllItems) //oke & show by category
router.post('/', appController.addItem) //oke
router.get('/categories', appController.readAllCategorie) //oke
router.get('/ingredients', appController.showIngredients) //oke
router.get('/:id', appController.readItem) //oke
router.put('/:id', appController.editItem )  //oke
router.delete('/:id', appController.deleteItem) //oke

module.exports = router