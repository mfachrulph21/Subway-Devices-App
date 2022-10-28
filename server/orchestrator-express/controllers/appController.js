const { default: axios } = require("axios")
const redis = require("../config/redis")

const appUrl = 'http://localhost:4002'
const usersUrl = 'http://localhost:4001/users'

class appController {

    static async readAllItems(req, res, next) {
        try {

            const cacheItem = await redis.get('Items')

            if (cacheItem) {
                const data = JSON.parse(cacheItem)

                res.status(200).json(data)
            } else {
                const { data } = await axios({
                    url: `${appUrl}/items`,
                    method: 'GET'
                })

                const items = JSON.stringify(data)

                await redis.set('items', items)

                res.status(200).json(data)
            }
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async readItem(req, res, next) {
        try {
            
            const { id } = req.params
            
            let {data} = await axios({
                url: `${appUrl}/items/${id}`,
                method: 'GET'
            })

            let { data: user } = await axios({
                url: `${usersUrl}/${data.userMongoId}`
            })

            data.user = user
            res.status(200).json(data)

        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async addItem(req, res, next) {
        try {
            let {name, description, price, imgUrl, categoryId, ingredientsChoices, userMongoId} = req.body

            let {data} = await axios({
                url: `${appUrl}/items`,
                method: 'POST',
                data: {
                    name,
                    description,
                    price,
                    imgUrl,
                    categoryId,
                    ingredientsChoices,
                    userMongoId
                }
            })

            redis.del('items')
            res.status(201).json(data)
            
        } catch (error) {
            res.status(500).json(error)
        }
    }


    static async editItem(req, res, next) {
        try {
            const {id} = req.params

            let { name, description, price, imgUrl, categoryId, userMongoId } = req.body

            let {data} = await axios({
                url: `${appUrl}/items/${id}`,
                method: 'PUT',
                data : {
                    name,
                    description,
                    price,
                    imgUrl,
                    categoryId,
                    userMongoId
                }
            })

            redis.del('items')
            res.status(200).json(data)

        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async showItemsByCategory(req, res, next) {
        try {
            const { name } = req.query

            let {data} = await axios({
                url: `${appUrl}/items?name=${name}`,
                method: 'GET'
            })

            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async showIngredients(req,res,next) {
        try {
            
            const cacheIngredients = await redis.get('ingredients')

            if(cacheIngredients) {
                let data = JSON.parse(cacheIngredients)
                res.status(200).json(data)
            } else {
                let {data} = await axios({
                    url:`${appUrl}/items/ingredients`,
                    method: 'GET'
                })

                await redis.set('ingredients', JSON.stringify(data))
                res.status(200).json(data)
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }

    

    
}

module.exports = appController