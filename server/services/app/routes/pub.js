const express = require('express');
const categoryController = require('../controllers/categoryController');
const itemController = require('../controllers/itemController');
const router = express.Router();

router.get('/items', itemController.showItems)
router.get('/items/:id', itemController.getItem)
router.get('/categories', categoryController.showCategories)
router.get('/categories/items', itemController.showItemsByCategory)

module.exports = router