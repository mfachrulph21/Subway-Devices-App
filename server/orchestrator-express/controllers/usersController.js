const axios = require('axios')
const redis = require('../config/redis')

const baseUrl =  'http://localhost:4001/users'

class usersController {

    static async readAlluser(req, res, next) {
        try {

            console.log('ini dari orchestator')
            const cacheUser = await redis.get('users')

            if(cacheUser){
                //data dari cache masih string, jadi di parse dulu biar jadi object
                const data = JSON.parse(cacheUser)

                res.status(200).json(data)
            } else {
                let { data } = await axios({
                    url: `${baseUrl}`,
                    method : 'GET'
                })

                //dapet datanya dari axios ke user services, datanya di set ke cache(redis).
                //harus dalam bentuk string, jadi di stringfy dolo
                await redis.set('users', JSON.stringify(data))

                res.status(200).json(data)
            }

        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }

    static async readUserById(req, res, next) {
        try {

            const { id } = req.params

            const { data } = await axios({
                url: `${baseUrl}/${id}`,
                method: 'GET'
            })

            res.status(200).json(data)
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async deleteUser(req, res, next) {
        try {

            const { id } = req.params

            const { data } = await axios({
                url: `${baseUrl}/${id}`,
                method: 'DELETE'
            })

            redis.del('users')
            res.status(200).json(data) 
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async createUser(req, res, next) {
        try {
            const {username, password, email, role, phoneNumber, address} = req.body

            const { data } = await axios({
                url: `${baseUrl}`,
                method: 'POST',
                data : {
                    username,
                    password,
                    email,
                    role,
                    phoneNumber,
                    address
                }
            })

            //refresh cache setiap ada update (add/edit/delete)
            redis.del('users')
            res.status(201).json({message: 'User has been created!'})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = usersController