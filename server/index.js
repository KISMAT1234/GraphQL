const express = require ('express');
const {ApolloServer} = require('@apollo/server');
const {expressMiddleware} = require('@apollo/server/express4')
const bodyParser = require("body-parser");
const cors = require("cors");

async function startServer() {
    const app = express()
    const server = new ApolloServer({
        typeDefs:`
            type Todo {
                id: ID!
                title: String!
                completed: Boolean
        }
      type Query  {
             getTodos:[Todo]
        }
        `,
        resolvers:{
            Query:{
                getTodos:() =>[
                    {id:1, title:'kismat',completed:false}
                ]
            }
        }
    });

    app.use(bodyParser.json());
    app.use(cors());

    await server.start()

    app.use("/graphql", expressMiddleware(server));

    app.listen(8000, () => console.log('server started at 8000'))

}
startServer();