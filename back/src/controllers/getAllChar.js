const axios = require('axios');

const getAllChar = (res, pag) => {
    axios(`https://rickandmortyapi.com/api/character?page=${pag}`)
    .then(({ data }) => {
        if(data.results){
            return res.status(200).json(data.results);
        }
    })
    .catch((error) => {
        return res.status(500).send(error.message);
    })
}

module.exports = getAllChar;