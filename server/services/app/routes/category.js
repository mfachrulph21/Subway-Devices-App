const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

router.get('/', categoryController.showCategories)
router.post('/', categoryController.addCategory)
router.get('/:id', categoryController.getCategory)
router.put('/:id', categoryController.editCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router