const { createHashFromPassword } = require('../helpers/bcrypt')
const User = require('../model/user')

class userController {

    static async readAll(req, res, next) {
        try {
            console.log('masuk users services read all')
            const data = await User.findAll()
            res.status(200).json(data)

        } catch (error) {
            console.log(error)
            next(error)
        }

    }
    
    static async readById(req, res, next) {
        try {
            console.log('masuk users services read by id')
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
            console.log('masuk users services add')
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

            console.log('masuk users services DELETE')
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