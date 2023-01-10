import { gql } from "apollo-server";

export const typeDefs = gql`
  type Customer {
    _id: ID!
    CustomerName: String!
    CustomerOrder: Int!
    CustomerType: String!
  }

  type Query {
    getCustomers: [Customer!]!
    getCustomer(id: ID!): Customer!
  }

  type Mutation {
    createCustomer(
      CustomerName: String!
      CustomerOrder: Int!
      CustomerType: String!
    ): Customer!
  }
`;
