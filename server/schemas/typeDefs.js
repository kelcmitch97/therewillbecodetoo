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

  input ProductInfo {
    
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
    addOrder(products: [ID]!): Order
    addProduct( )
    updateProduct(_id: ID!, quantity: Int!): Product
    removeProduct(_id: ID!, quantity: Int!): Product

  }
`;

module.exports = typeDefs;