// server.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const databaseConnection = require('./db'); // Import the MongoDB connection
const User = require('./models/User'); // Import the User model

// GraphQL Schema
const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    email: String!
    age: Int
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    createUser(username: String!, email: String!, age: Int): User
  }
`);

// GraphQL Resolvers
const root = {
  createUser: async ({ username, email, age }) => {
    const user = new User({ username, email, age });
    try {
      await user.save();
      return user;
    } catch (error) {
      throw new Error('Failed to create user');
    }
  },
};

const app = express();

// GraphQL Endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL for testing
}));

databaseConnection();

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle MongoDB connection errors
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
