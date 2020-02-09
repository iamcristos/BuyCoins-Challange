const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const app = express();

const typeDefs = require("./Schema/calculatePrice");
const resolvers = require("./Resolvers/calculatePriceResolver");

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = { app, server };
