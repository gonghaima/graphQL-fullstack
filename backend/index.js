import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mergedResolvers from './resolvers/index.js';
import mergedTypeDefs from './typeDefs/index.js';

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }, // Specify the port if needed
});

console.log(`🚀 Server ready at ${url}`);
