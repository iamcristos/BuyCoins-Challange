const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const app = express();

const typeDefs = require("./Schema/calculatePrice.schema");
const resolvers = require("./Resolvers/calculatePrice.resolver");
const { currentBtcPrice } = require("./Utils/currentBtcPrice");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { currentBtcPrice };
  },
  introspection: true,
  playground: true
});

module.exports = { app, server };
