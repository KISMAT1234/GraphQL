import {ApolloServer} from "@apollo/Server";


function createApolloGraphqlServer(){
const gqlServer = new ApolloServer({
    typeDefs:`
    type User{
       username:String!
       email: String!
       password: String!
    }

     type Query{
         allUsers:[User]
     }

     type Mutation {
        createUser(username: String!, email: String!, password: String!): User!
      }
`,
 resolvers:{
    Query:{},
    Mutation:{},
 },
})
