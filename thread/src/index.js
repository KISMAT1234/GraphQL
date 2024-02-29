import express from 'express'
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4'
const users = require("./model.js")



async function init(){
const app = express();
const PORT = Number(process.env.PORT) || 8000

app.use(express.json())

// graphql server

const gqlServer = new ApolloServer({
    typeDefs:`
     type Query{
         hello:String   
         say(name:String):String
     }
    `,  //Schema
    resolvers:{
        Query:{
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