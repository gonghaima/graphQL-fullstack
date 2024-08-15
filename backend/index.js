const { ApolloServer } = require('@apollo/server');
import { startStandaloneServer } from 'graphql-nexus';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer({ server });
console.log(`🚀 Server ready at ${url}`);
