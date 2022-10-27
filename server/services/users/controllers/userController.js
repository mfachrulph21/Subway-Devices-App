const { createHashFromPassword } = require('../helpers/bcrypt')
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
            
            const {id} = req.params

            const data = await User.findById(id)
            res.status(200).json(data)

        } catch (error) {
            console.log(error)
            next(error)
            
        }
    }

    static async create(req, res, next) {
        try {
            
            let {username, email, password, role, phoneNumber, address} = req.body

            password = createHashFromPassword(password)

            const data = await User.create({
                email,
                password,
                username,
                role,
                phoneNumber,
                address
            })

            res.status(201).json({message: 'your account has been created'})
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {

            const {id} = req.params

            const data = await User.deleteById(id)

            res.status(200).json({message: 'your account has been deleted'})

        } catch (error) {
            console.log(error)
            next(error)
        }
    }

}

module.exports = userController