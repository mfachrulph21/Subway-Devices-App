const router = require('express').Router()
const appRouter = require('./appServices')
const userRouter = require('./userServices')


router.use('/users', userRouter )
router.use('/items', appRouter)


module.exports = router