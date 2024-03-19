
import { gql } from 'apollo-server-core';
const typeDefs = gql`
type Query{
   users:[User]
   user(_id:ID):User
   quotes:[Quote]
   iquote(by:ID!):[Quote]
}
type User {
    id: ID!
    username: String!
    email: String!
    age: Int
    createdAt: String!
    updatedAt: String!
  }

type Quote{
    name:String
    by:ID
}


type Mutation {
    createUser(username: String!, email: String!, age: Int): User
  }
`
export default typeDefs