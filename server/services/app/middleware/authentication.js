const { verifyPayload } = require('../helpers/jwt')
const { User } = require('../models')

async function authentication (req, res, next) {
    try {
        let access_token = req.headers.access_token

        if(!access_token) {
            throw {
                code:401,
                msg: 'User not login yet'
            }
        }

        let payload = verifyPayload(access_token)

        let user = await User.findByPk(payload.id)

        if(!user) {
            throw {
                code: 401,
                msg: 'Invalid Token'
            }
        }

        req.user = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication