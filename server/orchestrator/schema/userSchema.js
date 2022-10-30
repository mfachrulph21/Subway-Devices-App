const redis = require("../config/redis");
const axios = require('axios');

const baseUrl =  'http://localhost:4001/users'

const userTypeDefs = `#graphql
type User {
    _id: String,
    email: String,
    username: String,
    role: String,
    phoneNumber: String,
    address: String
}

type Message {
    message:String
  }

input userInput {
    username: String!,
    email: String!,
    role: String!,
    password: String!,
    phoneNumber: String!,
    address: String!
}

type Query {
    getAllUsers: [User],
    getUser(_id:String!): User
}

type Mutation {
    createUser(inputUser: userInput) : Message,
    deleteUser(_id: String!) : Message
}
`

const userResolver = {
    Query: {
        getAllUsers : async () => {
            try {
                const  cacheUser = await redis.get('users')

                if(cacheUser) {
                    let data = JSON.parse(cacheUser)
                    return data
                } else {

                    let { data } = await axios({
                        url : `${baseUrl}`,
                        method: 'GET'
                    })

                    await redis.set('users', JSON.stringify(data))

                    return data
                }
            } catch (error) {
                console.log(error)
            }
        },
        getUser: async (_,args) => {
            try {
                const {data} = await axios({
                    url: `${baseUrl}/${args._id}`,
                    method: 'GET'
                })
                return data
            } catch (error) {
                console.log(data)
            }
        }
    },
    Mutation: {
        createUser: async (_,args) => {
            try {
                let { data } = await axios({
                    url:`${baseUrl}`,
                    method: 'POST',
                    data: args.inputUser
                })

                await redis.del('users')
                return data
            } catch (error) {
                console.log(error)
            }
        },
        deleteUser : async (_,args) => {
            try {
                let { data } = await axios({
                    url : `${baseUrl}/${args._id}`,
                    method: 'DELETE'
                })

                await redis.del('users')
                return data
                
            } catch (error) {
                console.log(error)
            }   
        }
    }
}

module.exports = {
    userResolver,
    userTypeDefs
}