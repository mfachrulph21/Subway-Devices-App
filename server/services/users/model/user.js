const { ObjectId } = require("mongodb")
const { getDB } = require("../config/config-mongo")


class User {

    static async findAll() {
        try {
            const db = getDB()
            
            const user = db.collection('users')

            //paramerter 1 untuk ngefilter by value, parameter 2 (projection) untuk exlude field dari hasil return documentnya
            const data = await user.find({},{projection:{password:false}}).toArray()

            return data
            
        } catch (error) {
            throw error
        }
    }

    static async findById(id) {
        try {
            const db = getDB()

            const user = db.collection('users')

            const data = await user.findOne({
                _id:ObjectId(id)
            }, {projection:{password:false}})
            
            return data
            
        } catch (error) {
            throw error 
        }  
    }

    static async deleteById(id) {
        try {
            const db = getDB()

            const user = db.collection('users')

            const data = await user.deleteOne({
                _id:ObjectId(id)
            })

            return data
            
        } catch (error) {
            throw error
        }
    }


    static async create(input) {
        try {
            const db = getDB()

            const user = db.collection('users')

            const data = await user.insertOne(input)
            
            return data
        } catch (error) {
            throw error
        }
    }

}

module.exports = User