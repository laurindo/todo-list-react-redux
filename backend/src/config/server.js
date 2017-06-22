const port = 3000;

const bodyParser = require('body-parser');//
//use the pattern chain of responsability - is a chain of middlewares, chain of functions that will work with functions
const express = require('express');//server web
const allowCors = require('./cors');
const server = express();

//config some middlewares
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function() {
    console.log(`server running on port: ${port}`);
});

module.exports = server;