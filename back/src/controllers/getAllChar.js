const axios = require('axios');

const getAllChar = (req, res) => {
    const { page } = req.query;

    axios(`https://rickandmortyapi.com/api/character?page=${page}`)
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