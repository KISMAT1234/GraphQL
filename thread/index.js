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
       username:String
    }

     type Query{
         allUsers:[User]
     }
     type Mutation{
        addMsg(username: String!):User
     }
    `,  //Schema
    resolvers:{
        Query:{
            allUsers: async()=>{
                return await users.find({})
            },
        },
        Mutation:{
            addMsg: async({username}) => {
                try {
                   return await user.create()
                  } 
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