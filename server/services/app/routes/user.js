const express = require('express');
const userController = require('../controllers/userController');
const authentication = require('../middleware/authentication');
const router = express.Router();


router.post('/login', userController.login);
router.use(authentication)
router.post('/register', userController.register);


module.exports = router