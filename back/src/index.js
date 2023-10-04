const http = require('http');
const getCharById = require('./controllers/getCharById.js');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    // if(request.url.includes('/rickandmorty/character')){
    //     response.writeHead(200, { "Content-type": "application/json"});

    //     let id = request.url.split("/").pop();
    //     id = Number(id);
    //     let idChar = {};

    //     characters.forEach((character) => {
    //         if(character.id === id) idChar = character;
    //     });

    //     response.end(JSON.stringify(idChar));   
    // }
    if(request.url.includes('/rickandmorty/character')){
        getCharById(response, request.url.split('/').at(-1));
    }



}).listen(3001, '127.0.0.1');