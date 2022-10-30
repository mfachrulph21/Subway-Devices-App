const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { itemResolver, itemTypeDefs } = require('./schema/itemSchema')
const { userResolver, userTypeDefs } = require('./schema/userSchema')

const server = new ApolloServer({
  typeDefs : [
    userTypeDefs,
    itemTypeDefs
  ],
  resolvers : [
    itemResolver,
    userResolver
  ]
});

startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
