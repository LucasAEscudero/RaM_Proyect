const axios = require('axios');

//by id
const getCharById = async (req, res) => {
    const id = req.params.id;

    try{
        const character = (await axios(`https://rickandmortyapi.com/api/character/${id}`)).data;

        if(character) return res.status(200).json(character);

        return res.status(404).send('Not found');
    }
    catch(error){
        return res.status(500).send(error.message);
    }
}


//by value
const getCharacters = async (req, res) => {
    const { page, value, type } = req.query;
    let characters = [];

    try{
        const data = (await axios(`https://rickandmortyapi.com/api/character/?page=${page}&&${type}=${value}`)).data;
        
        if(data.results){
            data.results.forEach((character) => {
                characters.push({
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender,
                origin: character.origin,
                image: character.image
                });
            });

            return res.status(200).json({ pages: data.info.pages, characters: characters });
        }

        return res.status(404).send('Not found');
    }
    catch(error){
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getCharById,
    getCharacters
}