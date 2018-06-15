const express = require("express");
const path = require('path');
const url = require('url');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

app.get("/", function (req, res){
  res.send("Working");
});

app.listen(4000, function(){
  console.log("listening on port 4000");
});
