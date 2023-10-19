//express
const { Router } = require('express');

//controllers
const { getCharById, getCharacters } = require('../controllers/getCharacter.js');
const login = require('../controllers/login.js');
//const { postFav, deleteFav, logOutFav } = require('../controllers/handleFavorites.js');
const { postFav } = require('../controllers/postFav.js');
const { deleteFav } = require('../controllers/deleteFav.js');


const getAllChar = require('../controllers/getAllChar.js');

const { postUsers } = require('../controllers/postUsers.js');

const mainServer = Router();

//login
mainServer.get('/login', login);

mainServer.post('/login', postUsers);

//searchId
mainServer.get('/character/:id', getCharById);

//searchBy
mainServer.get('/characters', getCharacters);

//getAll
mainServer.get('/catalogue', getAllChar);

//fav
mainServer.post('/fav', postFav);

mainServer.delete('/fav/:id', deleteFav);

//mainServer.delete('/logOutFav', logOutFav);

module.exports = mainServer;