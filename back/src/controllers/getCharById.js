const axios = require('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
        if(data.name){
            const character = {
                id: id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                status: data.status,
                image: data.image
            }

            return res.writeHead(200, { 'Content-type': 'application/json'})
            .end(JSON.stringify(character));
        }
    })
    .catch(() => {
        return res.writeHead(500, { 'Content-type': 'plain-text'})
        .end('No existe el personaje...');
    })
}

module.exports = getCharById;