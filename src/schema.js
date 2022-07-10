const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    shops: [Shop]!
  }

  type Shop {
    id: ID!
    name: String!
    description: String
    address: String
    open: String
    close: String
    parking: String
    photo: String
    map: Map
    url: String
    wifi: String
  }

  type Map {
    lat: Float
    lng: Float
  }
`;

module.exports = typeDefs;
