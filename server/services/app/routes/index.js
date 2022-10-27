const express = require('express');
const router = express.Router();
const userRouter = require('./user')
const categoryRouter = require('./category')
const itemRouter = require('./items')
const pubRouter = require('./pub');
const authentication = require('../middleware/authentication');
const errorHandler = require('../middleware/errorHandler');

router.use('/pub', pubRouter)
router.use('/users', userRouter)
// router.use(authentication)
router.use('/items', itemRouter)
router.use('/categories', categoryRouter)
router.use(errorHandler)

module.exports = router