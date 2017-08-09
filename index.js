var express = require('express');
var app = express();
var path = require('path');
var jsonPath = path.join( __dirname , "data.json")
var bodyparser = require("body-parser")
var api = require('./api');
var clientPath = path.join(__dirname, 'client');

app.use(bodyparser.json());

app.use("/api", api);

app.listen(3000, function() {
console.log('Server Started')
});








