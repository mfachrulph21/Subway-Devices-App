const { compareHashFromPassword } = require('../helpers/bcrypt')
const { signPayload } = require('../helpers/jwt')
const { User } = require('../models')

class userController {

    static async login (req, res, next) {
        try {
            const {email, password} = req.body

            if(!email) {
                throw {
                    code: 400,
                    msg: 'Email is required'
                }
            }

            if(!password) {
                throw {
                    code: 400,
                    msg: 'Password is required'
                }
            }

            const user = await User.findOne({
                where : {
                    email
                }
            })

            let isValid = compareHashFromPassword(password, user.password)

            if(!isValid || !user) {
                throw {
                    code: 401,
                    msg: 'Invalid email/password'
                }
            }

            let payload = {
                id : user.id,
            }

            let access_token = signPayload(payload)

            res.status(200).json({access_token})
        } catch (error) {
            next(error)
        }
    }

    static async register (req, res, next) {
        try {
            const { username, email, password, address, phoneNumber } = req.body
            const user = await User.create({
                username,
                email, 
                password,
                address,
                phoneNumber,
                role : 'Admin'
            })

            res.status(201).json({message:'Registered success'})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = userController