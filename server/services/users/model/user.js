const { getDB } = require("../config/config-mongo")


class User {

    static async findAll() {
        try {
            const db = getDB()
            
            const user = db.collection('users')

            const data = await user.find().toArray()

            console.log(data, 'ini data')

            return data
            
        } catch (error) {
            throw error
        }
    }

    static async create(input) {
        try {
            const db = getDB()

            const user = db.collection('users')

            console.log('masuk sini')
            console.log(input, 'ini input')
            const data = await user.insertOne(input)
            
            return data
        } catch (error) {
            throw error
        }
    }
}

module.exports = User