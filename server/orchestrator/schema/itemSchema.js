const redis = require("../config/redis");
const axios = require('axios');

const appUrl = 'http://localhost:4002'
const usersUrl = 'http://localhost:4001/users'


const itemTypeDefs=`#graphql

type Item {
    id: ID!,
    name: String,
    description: String,
    price: Int,
    imgUrl: String,
    categoryId: Int
}


type User {
    _id: String,
    email: String,
    username: String,
    role: String,
    phoneNumber: String,
    address: String
}

type category {
    id: ID,
    name: String
}

type Ingredients {
    id : ID!,
    name: String
}

type ItemDetail {
    id: ID,
    name: String,
    description: String,
    price: Int,
    imgUrl: String,
    userMongoId: String,
    categoryId: ID,
    Category: category,
    user: User
}

type Message {
    message:String
}


input InputIngredients {
   ingredientId : Int
}


input InputItem {
    name: String,
    description: String,
    price: Int,
    imgUrl: String,
    userMongoId: String,
    categoryId: Int,
    ingredientsChoices: [InputIngredients]
}

input InputEditItem {
    name: String,
    description: String,
    price: Int,
    imgUrl: String,
    userMongoId: String,
    categoryId: Int,
}


type Query {
    getAllItems(name: Int):[Item],
    getItem(id: ID!): ItemDetail,
    getAllCategories: [category],
    getAllIngredients: [Ingredients]

}

type Mutation {
    createItem(InputItem: InputItem) : Message
    deleteItem(id: ID!) : Message
    editItem(InputEditItem: InputEditItem, id: ID!) : Message
}
`

const itemResolver = {
    Query : {
        getAllItems : async (_,args) => {
            try {

                if(args.name) {
                    const {data} = await axios({
                        url : `${appUrl}/items?name=${args.name}`,
                        method : 'GET'
                    })

                    return data

                } else {

                    const cacheItem = await redis.get('Items')

                    if (cacheItem) {

                        const data = JSON.parse(cacheItem)
                        return data
                    } else {
                        const { data } = await axios({
                            url : `${appUrl}/items`,
                            method : 'GET'
                        })

                        await redis.set('items', JSON.stringify(data))

                        return data
                    }
                }
                
            } catch (error) {
                console.log(error)
            }

        },
        getItem: async (_,args) => {
            try {
                
                let { data } = await axios({
                    url : `${appUrl}/items/${args.id}`,
                    method : 'GET'
                })

                let { data: user } = await axios({
                    url: `${usersUrl}/${data.userMongoId}`
                })

                data.user = user
                return data

            } catch (error) {
                console.log(error)
            }
        },
        getAllCategories : async () => {
            try {

                const cacheCategories = await redis.get('categories')
                
                if (cacheCategories) {
                    
                    let data = JSON.parse(cacheCategories)
                    return data
                } else {
                    let { data } = await axios({
                        url : `${appUrl}/categories`,
                        method : 'GET'
                    })
    
                    return data
                }

            } catch (error) {
                console.log(data)
            }
        },
        getAllIngredients : async () => {
            try {

                let cacheIngredients = await redis.get('ingredients')

                if (cacheIngredients) {

                    let data = JSON.parse(cacheIngredients)
                    return data
                } else {

                    let { data } = await axios({
                        url : `${appUrl}/items/ingredients`,
                        method : 'GET'
                    })
    
                    return data
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation : {
        createItem : async (_,args) => {
            try {
                let { data } = await axios({
                    url : `${appUrl}/items`,
                    method : 'POST',
                    data : args.InputItem
                })
    
                await redis.del('items')
                return data
            } catch (error) {
                console.log(error)
            }
        },deleteItem : async (_,args) => {
            try {
                let { data } = await axios({
                    url : `${appUrl}/items/${args.id}`,
                    method : 'DELETE'
                })

                await redis.del('items')
                return data
            } catch (error) {
                console.log(error)
            }
        },
        editItem : async (_,args) => {
            try {
                let { data } = await axios({
                    url : `${appUrl}/items/${args.id}`,
                    method : 'PUT',
                    data : args.InputEditItem
                })

                await redis.del('items')
                return data
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = {
    itemResolver,
    itemTypeDefs
}
