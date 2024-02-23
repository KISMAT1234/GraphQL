
import { gql } from 'apollo-server-core';
const typeDefs = gql`
type User{
    id:ID!
    firstName:String
    lastName:String
    email:String
    password:String
    quotes:String
}

type Quote{
    name:String
    by:ID
}

type Query{
   users:[User]
   user(id:ID):User
   quotes:[Quote]
   iquote(by:ID!):[Quote]
}
`
export default typeDefs