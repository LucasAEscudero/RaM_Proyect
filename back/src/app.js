const express = require('express');
const mainServer = require('./routes/index.js');
const bodyParser = require("body-parser");

const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());
server.use(bodyParser.json());

//me redirecciona a mi mainServer
server.use('/rickandmorty', mainServer);

module.exports = server;
