//express
const { Router } = require('express');

//controllers
const { getCharById, getCharacters } = require('../controllers/getCharacter.js');
const login = require('../controllers/login.js');
const { postFav, deleteFav, logOutFav } = require('../controllers/handleFavorites.js');
const getAllChar = require('../controllers/getAllChar.js');

const mainServer = Router();

//login
mainServer.get('/login', login);

//searchId
mainServer.get('/character/:id', getCharById);

//searchBy
mainServer.get('/characters', getCharacters);

//getAll
mainServer.get('/catalogue', getAllChar);

//add fav
mainServer.post('/favorites', postFav);

//delete fav
mainServer.delete('/favorites', deleteFav);

mainServer.delete('/logOutFav', logOutFav);

module.exports = mainServer;