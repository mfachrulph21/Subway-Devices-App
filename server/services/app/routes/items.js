const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();


router.get('/', itemController.showItems)
router.post('/', itemController.addItem)
router.get('/ingredients', itemController.showIngredients)
router.get('/:id', itemController.getItem)
router.put('/:id', itemController.editItem)
router.delete('/:id', itemController.deleteItem)

module.exports = router