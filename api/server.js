const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const app = express();

const typeDefs = require("./Schema/calculatePrice");
const resolvers = require("./Resolvers/calculatePriceResolver");
const { currentBtcPrice } = require("./Utils/currentBtcPrice");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { currentBtcPrice };
  }
});

module.exports = { app, server };
