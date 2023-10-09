//express
const { Router } = require('express');

//controllers
const { getCharById, getCharacters } = require('../controllers/getCharacter.js');
const login = require('../controllers/login.js');
const { postFav, deleteFav } = require('../controllers/handleFavorites.js');
const getAllChar = require('../controllers/getAllChar.js');

const mainServer = Router();

//login
mainServer.get('/login', (req, res) => {
    login(res, req.query);
})

//searchId
mainServer.get('/character/:id', (req, res) => {
    getCharById(req, res);
});

//searchBy
mainServer.get('/characters', (req, res) => {
    return getCharacters(req, res);
});

//getAll
mainServer.get('/catalogue', (req, res) => {
    getAllChar(res, req.query.page);
});

//add fav
mainServer.post('/favorites', (req, res) => {
    postFav(res, req.body);
});

//delete fav
mainServer.delete('/favorites', (req, res) => {
    deleteFav(res, req.query.id);
});

module.exports = mainServer;