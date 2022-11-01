const jwt = require('jsonwebtoken')

const signPayload = (payload) => jwt.sign(payload, 'KUNCI_RAHASIA_BANGET');
const verifyPayload = (token) => jwt.verify(token, 'KUNCI_RAHASIA_BANGET');

module.exports = {
    signPayload,
    verifyPayload
}