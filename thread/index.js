import express from 'express'
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4'
import users from "./model.js"
import databaseConnection from './connection.js'
import cors from 'cors'




async function init(){
const app = express();
const PORT = Number(process.env.PORT) || 8000

app.use(express.json())

app.use(cors());

databaseConnection()
// graphql server

const gqlServer = new ApolloServer({
    typeDefs:`
    type User{
       username:String!
       email: String!
    }

     type Query{
         allUsers(username:String!):[User]
     }
     
     type Mutation {
        createUser(post:String!):User
      }
    
 
    `,  //Schema
    resolvers:{
        Query:{
            allUsers: async(_, username)=>{
                return await users.find(username)
            },
        },
        Mutation:{
            createUser: async(_, {post}) => {
                const data = await users({post});
                return data.save()
                // return { id: result.insertedId, ...input };
            }
        }
    }  //
});

await gqlServer.start()

app.get('/',(req,res)=>{
  res.end("Kismat good boy")
})

app.use('/graphql',expressMiddleware(gqlServer))

app.listen( PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
}
init()