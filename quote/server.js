// const express = require ('express');
import express from 'express'
import {ApolloServer} from '@apollo/server';
import { gql } from 'apollo-server-core';
import {expressMiddleware} from'@apollo/server/express4'
import bodyParser from "body-parser"
import typeDefs from './schemaGql.js';
import resolvers from './resolvers.js';



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



