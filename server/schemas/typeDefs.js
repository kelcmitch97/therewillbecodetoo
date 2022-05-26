const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Category {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    username: String
    email: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]
    categories: [Category]
    user(username: String!): User
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;