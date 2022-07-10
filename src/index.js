require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ShopAPI = require('./datasources/shop');

const dataSources = () => ({
  shopAPI: new ShopAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
});

server.listen().then(() => {
  console.log(`Server is running at http://localhost:4000`);
});