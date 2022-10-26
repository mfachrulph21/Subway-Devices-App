const User = require('../model/user')

class userController {

    static async readAll(req, res, next) {
        try {
            const data = await User.findAll()
            res.status(200).json(data)

        } catch (error) {
            console.log(error)
            next(error)
        }

    }
    
    static async readById(req, res, next) {
        try {
            
        } catch (error) {
            
        }
    }

    static async create(req, res, next) {
        try {
            
            const {email, password} = req.body

            const data = await User.create({
                email,
                password
            })

            res.status(201).json({message: 'your account has been created'})
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

}

module.exports = userController