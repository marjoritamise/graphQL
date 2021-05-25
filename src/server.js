const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const MovieResolver = require("./resolvers");
const TimestampType = require("./GraphQLTimestamp");
const resolvers = [MovieResolver, TimestampType];
const { models, db } = require("./db");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Listen on ${url}`));
