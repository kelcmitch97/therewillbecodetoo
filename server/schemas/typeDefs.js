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
    orders: [Order]
    products: [Product]
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

  type Order {
    _id: ID
    purchaseDate: String
    product: [Product]
  }

  type Auth {
    token: ID
    user: User
  }

  input productData {
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }

  type Query {
    me: User
    users: [User]
    categories: [Category]
    user(username: String!): User
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    addProduct(userId: ID!, productData: productData): Product
  }
`;

module.exports = typeDefs;