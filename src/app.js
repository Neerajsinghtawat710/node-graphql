const express = require("express");
const app = express();

require("dotenv").config("./src/.env");

require("./config/database");

const expresGraphQl = require("express-graphql").graphqlHTTP;
const schema = require("./graphql/schema");
const resolver = require("./graphql/resolver");

app.use(
  "/graphql",
  expresGraphQl({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

module.exports = app;
