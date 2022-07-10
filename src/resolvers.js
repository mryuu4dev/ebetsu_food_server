module.exports = {
  Query: {
    shops: (_, __, { dataSources }) =>
      dataSources.shopAPI.getAllShops(),
  },
};