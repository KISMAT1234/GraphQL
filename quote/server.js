// const express = require ('express');
import express from 'express'
import {ApolloServer} from '@apollo/server';
// import { gql } from 'apollo-server-core';
import {expressMiddleware} from'@apollo/server/express4'
import bodyParser from "body-parser"
import typeDefs from './schemaGql.js';
import resolvers from './resolvers.js';
import mongoose from  'mongoose';
import './models/Quotes.js'
import './models/User.js'

mongoose.connect('mongodb://127.0.0.1:27017/graphql').then(()=>{
    console.log("connected to the database")
}).catch((error)=>{
    console.log('Error:',error.message)
});

async function startServer() {
    const app = express()
const server = new ApolloServer({
        typeDefs,
        resolvers,
    })


app.use(bodyParser.json());
// app.use(cors());

await server.start()

app.use("/quote", expressMiddleware(server));

app.listen(8000, () => console.log('server started at 8000'))

}



startServer()



